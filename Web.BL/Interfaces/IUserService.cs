using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Models;
using Web.BL.Models;

namespace Web.BL.Interfaces
{
    public interface IUserService
    {
        Task<ServiceResult> GetUsersAsync(int pageNumber, string search = null, int pageSize = 0);
    }
}
