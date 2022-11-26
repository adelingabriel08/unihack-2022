using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Unihack.Infrastructure.Database;
using Unihack.Infrastructure.Entities;

namespace Unihack.Infrastructure.Repositories
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        public readonly ApplicationDbContext _dbContext;

        public Repository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<T> CreateAsync(T entity)
        {
            entity.CreatedTimeUtc = DateTime.UtcNow;
            var result = await _dbContext.Set<T>().AddAsync(entity);
            await _dbContext.SaveChangesAsync();
            return result.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _dbContext.Set<T>().FirstOrDefaultAsync(p => p.Id == id);
            _dbContext.Set<T>().Remove(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<List<T>> GetAsync(int skip = 0, int take = 0, Func<IQueryable<T>, IQueryable<T>> queryable = null)
        {
            var query = _dbContext.Set<T>().AsQueryable();

            if (queryable != null)
                query = queryable(query);
            
            if (take > 0)
                return await query.Skip(skip).Take(take).ToListAsync();

            return await query.ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id, Func<IQueryable<T>, IQueryable<T>> queryable = null)
        {
            var query = _dbContext.Set<T>().AsQueryable();

            if (queryable != null)
                query = queryable(query);

            var entity = await query.FirstOrDefaultAsync(p => p.Id == id);

            return entity;
        }

        public async Task SaveChangesAsync()
        {
            await _dbContext.SaveChangesAsync();
        }
    }
}
