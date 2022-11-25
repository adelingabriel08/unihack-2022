using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Unihack.Core.Contracts;
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

        public Task<StolenItemViewModel> AddStolenItem(int id)
        {
            throw new NotImplementedException();
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

        private StolenItemViewModel GetViewModel(StolenItem item)
        {
            var vm = new StolenItemViewModel()
            {
                Title = item.Title,
                StolenItemTypeId = item.StolenItemTypeId,
                Description = item.Description,
                SerialNumber = item.SerialNumber,
                Location = item.Location,
                Color = item.Color,
                StolenItemType = item.StolenItemType
            };
            return vm;
        }
    }
}
