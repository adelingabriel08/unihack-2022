using Microsoft.AspNetCore.Mvc;
using Unihack.Core.Contracts;
using Unihack.Core.ViewModels;

namespace Unihack.API.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class IdentityController : ControllerBase
    {
        public readonly IIdentityService _identityService;

        public IdentityController(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            return Ok(await _identityService.Login(model));
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            return Ok(await _identityService.Register(model));
        }

    }
}
