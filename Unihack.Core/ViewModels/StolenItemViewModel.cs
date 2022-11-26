using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Unihack.Infrastructure.Entities;

namespace Unihack.Core.ViewModels
{
    public class StolenItemViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int StolenItemTypeId { get; set; }
        public string SerialNumber { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public string Color { get; set; }
        public string Size { get; set; }
        public string FileUrl { get; set; }
        public DateTime CreatedTimeUTC { get; set; }
        public StolenItemType StolenItemType { get; set; }
        public UserViewModel User { get; set; }
    }
}
