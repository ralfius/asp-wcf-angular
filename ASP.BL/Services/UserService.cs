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

namespace ASP.BL.Services
{
    public class UserService : IUserService
    {
        private readonly IErrorProcessingService _errorProcessingService;

        public UserService(IErrorProcessingService errorProcessingService)
        {
            _errorProcessingService = errorProcessingService;
        }

        public async Task<ServiceResult> GetUsersAsync(int pageNumber, string search = null, int pageSize = 0)
        {
            var result = new ServiceResult();

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

                    }
                    else
                    {
                        //result.Set(wcfResult);
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
