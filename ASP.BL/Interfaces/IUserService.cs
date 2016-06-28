using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Models;
using ASP.BL.Models;

namespace ASP.BL.Interfaces
{
    public interface IUserService
    {
        Task<ServiceResult<PagedList<UserModel>>> GetUsersAsync(int pageNumber, string search, int pageSize = 0);
        Task<ServiceResult> DeleteUserAsync(int userId);
        Task<ServiceResult<UserModel>> UpdateUserAsync(UserModel user);
    }
}
