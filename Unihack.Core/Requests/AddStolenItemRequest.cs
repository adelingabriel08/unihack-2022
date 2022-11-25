using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Unihack.Infrastructure.Entities;

namespace Unihack.Core.Requests
{
    public class AddStolenItemRequest
    {
        public string? Title { get; set; }
        public int? StolenItemTypeId { get; set; }
        public string? StolenItemTypeName { get; set; }
        public string? SerialNumber { get; set; }
        public string? Description { get; set; }
        public string? Location { get; set; }
        public string? Color { get; set; }
        public string? Size { get; set; }
    }
}
