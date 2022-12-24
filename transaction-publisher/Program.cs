
using Google.Cloud.PubSub.V1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

public class Program
{
    static async Task Main(string[] args)
    {
        Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", "/workspaces/transaction-publisher/application_default_credentials.json", EnvironmentVariableTarget.Process);
        string projectId = "tidy-arena-247812";
        string topicId = "transactions-websockets";
        List<string> names = new List<string>();

        // Add some items to the list
        names.Add("Alice");
        names.Add("Bob");
        names.Add("Charlie");
        Program example = new Program();

        while (true)
        {
            // Read a key from the console
            ConsoleKeyInfo keyInfo = Console.ReadKey();

            // If the key is the spacebar, print "Hello, World!"
            if (keyInfo.Key == ConsoleKey.Spacebar)
            {
                await example.PublishMessagesAsync(projectId, topicId, names);
            }
        }
    }
    public async Task<int> PublishMessagesAsync(string projectId, string topicId, IEnumerable<string> messageTexts)
    {
        TopicName topicName = TopicName.FromProjectTopic(projectId, topicId);
        PublisherClient publisher = await PublisherClient.CreateAsync(topicName);

        int publishedMessageCount = 0;
        var publishTasks = messageTexts.Select(async text =>
        {
            try
            {
                string message = await publisher.PublishAsync(text);
                Console.WriteLine($"Published message {message}");
                Interlocked.Increment(ref publishedMessageCount);
            }
            catch (Exception exception)
            {
                Console.WriteLine($"An error ocurred when publishing message {text}: {exception.Message}");
            }
        });
        await Task.WhenAll(publishTasks);
        return publishedMessageCount;
    }
}


