using Unihack.Core.ViewModels;

namespace Unihack.Core.Contracts
{
    public interface IScrapingService
    {
        Task<List<AdvertViewModel>> GetOlxPossibleAdverts(int stolenItemId);
    }
}
