using blazorapi.Hubs;
using blazorapi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace blazorapi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class HomeController : ControllerBase
{
    private readonly IHubContext<SignalHub> _hubContext;

    public HomeController(IHubContext<SignalHub> hubContext)
    {
        _hubContext = hubContext;
    }

    [HttpGet]
    [Route("PushEmployee")]
    public IActionResult PushEmployee(int Id, string Name, string Address)
    {
        Employee employee = new Employee
        {
            Id = Id,
            Name = Name,
            Address = Address
        };

        _hubContext.Clients.All.SendAsync("ReceiveEmployee", employee);
        return Ok("Done");
    }

    [HttpGet]
    [Route("PushMessage")]
    public IActionResult PushMessage(string message)
    {
        _hubContext.Clients.All.SendAsync("ReceiveMessage", message);
        return Ok("Done");
    }
}