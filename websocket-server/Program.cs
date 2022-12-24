using System.Net.Sockets;
using System.Net;
using System;

class Server
{
    public static void Main()
    {
        TcpListener server = new TcpListener(IPAddress.Parse("0.0.0.0"), 5000);

        server.Start();
        Console.WriteLine("Server has started on 0.0.0.0:5000.{0}Waiting for a connection…", Environment.NewLine);

        TcpClient client = server.AcceptTcpClient();

        Console.WriteLine("A client connected.");
    }
}