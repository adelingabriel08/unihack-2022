
namespace Unihack.Infrastructure.Entities
{
    public class StolenItem : BaseEntity
    {
        public string Title { get; set; }
        public int StolenItemId { get; set; }
        public string? SerialNumber { get; set; }
        public string? Description { get; set; }
        public string? Location { get; set; }
        public string? Color { get; set; }
        public string? Size { get; set; }
        public StolenItemType? StolenItemType { get; set; }
    }
}
