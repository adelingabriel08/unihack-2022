
using Unihack.Core.Requests;
using Unihack.Core.ViewModels;

namespace Unihack.Core.Contracts
{
    public interface IStolenItemService
    {
        Task<List<StolenItemViewModel>> GetStolenItems(int skip = 0, int take = 0);
        Task<StolenItemViewModel> GetStolenItem(int id);
        Task<StolenItemViewModel> AddStolenItem(AddStolenItemRequest request);
        Task<List<StolenItemTypeViewModel>> GetTypes();
    }
}
