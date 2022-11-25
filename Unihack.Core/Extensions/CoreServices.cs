using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Unihack.Infrastructure.Extensions;

namespace Unihack.Core.Extensions
{
    public static class CoreServices
    {
        public static IServiceCollection AddCoreServices(this IServiceCollection services, string connectionString)
        {
            services.AddInfrastructureServices(connectionString);
            return services;
        }
    }
}
