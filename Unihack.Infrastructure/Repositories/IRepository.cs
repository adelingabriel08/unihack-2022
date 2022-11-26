
using Unihack.Infrastructure.Entities;

namespace Unihack.Infrastructure.Repositories
{
    public interface IRepository<T> where T : BaseEntity
    {
        Task<T> CreateAsync(T entity);
        Task<T> GetByIdAsync(int id, Func<IQueryable<T>, IQueryable<T>> queryable = null);
        Task DeleteAsync(int id);
        Task<List<T>> GetAsync(int skip = 0, int take = 0, Func<IQueryable<T>, IQueryable<T>> queryable = null);
        Task SaveChangesAsync();
    }
}
