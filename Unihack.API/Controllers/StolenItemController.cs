using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Unihack.Core.Contracts;
using Unihack.Core.Requests;

namespace Unihack.API.Controllers
{
    [ApiController]
    [Route("api/stolenitems")]
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

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddStolenItem(AddStolenItemRequest request)
        {
            return Ok(await _itemService.AddStolenItem(request));
        }

        [HttpGet("types")]
        public async Task<IActionResult> GetStolenItemTypes()
        {
            return Ok(await _itemService.GetTypes());
        }
    }
}
