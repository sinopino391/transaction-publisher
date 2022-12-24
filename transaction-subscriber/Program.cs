
using Google.Cloud.PubSub.V1;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

public class Program
{
    static async Task Main(string[] args)
    {
        Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", "/workspaces/transaction-publisher/application_default_credentials.json", EnvironmentVariableTarget.Process);
        string projectId = "tidy-arena-247812";
        string subscriptionId = "transactions-websockets-sub";
        Program example = new Program();

        await example.PullMessagesAsync(projectId, subscriptionId, true);
    }
    public async Task<int> PullMessagesAsync(string projectId, string subscriptionId, bool acknowledge)
    {
        SubscriptionName subscriptionName = SubscriptionName.FromProjectSubscription(projectId, subscriptionId);
        SubscriberClient subscriber = await SubscriberClient.CreateAsync(subscriptionName);
        // SubscriberClient runs your message handle function on multiple
        // threads to maximize throughput.
        int messageCount = 0;
        Task startTask = subscriber.StartAsync((PubsubMessage message, CancellationToken cancel) =>
        {
            string text = System.Text.Encoding.UTF8.GetString(message.Data.ToArray());
            Console.WriteLine($"Message {message.MessageId}: {text}");
            Interlocked.Increment(ref messageCount);
            return Task.FromResult(acknowledge ? SubscriberClient.Reply.Ack : SubscriberClient.Reply.Nack);
        });
        // Run for 5 seconds.
        await Task.Delay(5000);
        await subscriber.StopAsync(CancellationToken.None);
        // Lets make sure that the start task finished successfully after the call to stop.
        await startTask;
        return messageCount;
    }
}