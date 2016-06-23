using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Interfaces;
using Common.Models;
using ASP.BL.Constants;
using ASP.BL.Interfaces;
using ASP.BL.Models;
using ASP.BL.Translators;

namespace ASP.BL.Services
{
    public class UserService : IUserService
    {
        private readonly IErrorProcessingService _errorProcessingService;

        public UserService(IErrorProcessingService errorProcessingService)
        {
            _errorProcessingService = errorProcessingService;
        }

        public async Task<ServiceResult<PagedList<UserModel>>> GetUsersAsync(int pageNumber, string search = null, int pageSize = 0)
        {
            var result = new ServiceResult<PagedList<UserModel>>();

            try
            {
                if (pageSize == 0)
                {
                    pageSize = DefaultValueConstants.PageSize;
                }


                using (var client = new WCFReference.UserServiceClient())
                {
                    var wcfResult = await client.GetUsersAsync(pageNumber, pageSize, search);

                    if (wcfResult.Success)
                    {
                        var users = wcfResult.Data;

                        result.Data = new PagedList<UserModel>();
                        result.Data.Set(users);
                        result.Data.Items = users.Items.Select(UserTranslator.ToUserModel).ToList();
                    }
                    else
                    {
                        result.Set(wcfResult);
                    }
                }
            }
            catch (Exception exc)
            {
                _errorProcessingService.ProcessASPException(exc, result);
            }

            return result;
        }
    }
}
