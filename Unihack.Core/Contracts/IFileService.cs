using Microsoft.AspNetCore.Http;

namespace Unihack.Core.Contracts
{
    public interface IFileService
    {
        Task<string> Upload(IFormFile file);
    }
}
