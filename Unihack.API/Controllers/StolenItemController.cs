using Microsoft.AspNetCore.Mvc;
using Unihack.Core.Contracts;

namespace Unihack.API.Controllers
{
    [ApiController]
    [Route("stolen")]
    public class StolenItemController : ControllerBase
    {
        private readonly IStolenItemService _itemService;

        public StolenItemController(IStolenItemService itemService)
        {
            _itemService = itemService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(int skip, int take)
        {
            return Ok(await _itemService.GetStolenItems(skip, take));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAll(int id)
        {
            var item = await _itemService.GetStolenItem(id);

            if (item is null) return NotFound();

            return Ok(item);
        }
    }
}
