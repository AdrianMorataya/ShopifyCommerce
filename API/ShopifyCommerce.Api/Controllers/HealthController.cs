
using Microsoft.AspNetCore.Mvc;

namespace ShopifyCommerce.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            status = "Healthy",
            service = "ShopifyCommerce.Api",
            timestamp = DateTime.UtcNow
        });
    }
}
