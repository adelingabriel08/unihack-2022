

using Unihack.Core.ViewModels;

namespace Unihack.Core.Contracts
{
    public interface IIdentityService
    {
        Task<string> Login(LoginViewModel model);
        Task<string> Register(RegisterViewModel model);
    }
}
