using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Unihack.Infrastructure.Entities;

namespace Unihack.Infrastructure.Database
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<StolenItem> StolenItems { get; set; }
        public DbSet<StolenItemType> StolenItemTypes { get; set; }
    }
}
