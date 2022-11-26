using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Unihack.Core.Contracts;

namespace Unihack.API.Controllers
{
    [Authorize]
    [Route("api/file")]
    [ApiController]
    public class FileController : ControllerBase
    {
        private readonly IFileService _fileService;

        public FileController(IFileService fileService)
        {
            _fileService = fileService;
        }

        [HttpPost]
        public async Task<IActionResult> Upload(IFormFile data)
        {
            return Ok(await _fileService.Upload(data));
        }
    }
}
