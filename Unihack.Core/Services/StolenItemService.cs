using Microsoft.EntityFrameworkCore;
using Unihack.Core.Contracts;
using Unihack.Core.Exceptions;
using Unihack.Core.Requests;
using Unihack.Core.ViewModels;
using Unihack.Infrastructure.Entities;
using Unihack.Infrastructure.Repositories;

namespace Unihack.Core.Services
{
    public class StolenItemService : IStolenItemService
    {
        private readonly IRepository<StolenItem> _stolenItemRepository;
        private readonly IRepository<StolenItemType> _stolenItemTypeRepository;

        public StolenItemService(IRepository<StolenItem> stolenItemRepository, IRepository<StolenItemType> stolenItemTypeRepository)
        {
            _stolenItemRepository = stolenItemRepository;
            _stolenItemTypeRepository = stolenItemTypeRepository;
        }

        public async Task<StolenItemViewModel> AddStolenItem(AddStolenItemRequest request)
        {
            if (request == null)
                throw new ValidationException("The stolen item cannot be null!");

            if (request.StolenItemTypeId <= 0 && string.IsNullOrWhiteSpace(request.StolenItemTypeName))
                throw new ValidationException("The stolen item type cannot be empty!");

            if (string.IsNullOrWhiteSpace(request.Title))
                throw new ValidationException("The title cannot be empty!");

            StolenItemType type;
            if (request.StolenItemTypeId > 0)
            {
                type = await _stolenItemTypeRepository.GetByIdAsync(request.StolenItemTypeId.Value);

                if (type is null)
                    throw new ValidationException("The stolen item type id is invalid!");
            }
            else
            {
                type = await _stolenItemTypeRepository.CreateAsync(new StolenItemType() { Name = request.StolenItemTypeName });
            }
            var item = new StolenItem()
            {
                Title = request.Title,
                StolenItemTypeId = type.Id,
                Description = request.Description,
                SerialNumber = request.SerialNumber,
                Location = request.Location,
                Color = request.Color,
                FileUrl = request.FileUrl
            };
            var entity = await _stolenItemRepository.CreateAsync(item);

            return GetViewModel(entity);
        }

        public async Task<StolenItemViewModel> GetStolenItem(int id)
        {
            var item = await _stolenItemRepository.GetByIdAsync(id, q => q.Include(p => p.StolenItemType));
            if (item is null) return null;
            return GetViewModel(item);
        }

        public async Task<List<StolenItemViewModel>> GetStolenItems(int skip = 0, int take = 0)
        {
            var items = await _stolenItemRepository.GetAsync(skip, take, q => q.Include(p => p.StolenItemType));
            List<StolenItemViewModel> vms = new List<StolenItemViewModel>();
            
            foreach(var item in items)
                vms.Add(GetViewModel(item));

            return vms;
        }

        public async Task<List<StolenItemTypeViewModel>> GetTypes()
        {
            var types = await _stolenItemTypeRepository.GetAsync();
            var items = new List<StolenItemTypeViewModel>();
            foreach(var type in types)
            {
                items.Add(new StolenItemTypeViewModel() { Id = type.Id, Name = type.Name });
            }
            return items;
        }

        private StolenItemViewModel GetViewModel(StolenItem item)
        {
            var vm = new StolenItemViewModel()
            {
                Id = item.Id,
                Title = item.Title,
                StolenItemTypeId = item.StolenItemTypeId,
                Description = item.Description,
                SerialNumber = item.SerialNumber,
                Location = item.Location,
                Color = item.Color,
                StolenItemType = item.StolenItemType,
                CreatedTimeUTC = item.CreatedTimeUtc,
                FileUrl = item.FileUrl
            };
            return vm;
        }
    }
}
