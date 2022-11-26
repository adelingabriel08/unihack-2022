using Microsoft.Extensions.DependencyInjection;
using Unihack.Core.Contracts;
using Unihack.Core.Services;
using Unihack.Infrastructure.Extensions;

namespace Unihack.Core.Extensions
{
    public static class CoreServices
    {
        public static IServiceCollection AddCoreServices(this IServiceCollection services, string connectionString)
        {
            services.AddInfrastructureServices(connectionString);
            services.AddScoped<IIdentityService, IdentityService>();
            services.AddScoped<IStolenItemService, StolenItemService>();
            return services;
        }
    }
}
