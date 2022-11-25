using Microsoft.AspNetCore.Identity;

namespace Unihack.Infrastructure.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
