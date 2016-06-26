using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;
using Common.Interfaces;
using Common.Models;
using WCF.Contracts;
using WCF.DataContracts;
using WCF.DAL.Interfaces;
using WCF.Translators;

namespace WCF.ServiceContracts
{
    public class UserService : IUserService
    {
        private readonly IErrorProcessingService _errorProcessingService;
        private readonly IUsersRepository _usersRepository;

        public UserService(IErrorProcessingService errorProcessingService, IUsersRepository usersRepository)
        {
            _errorProcessingService = errorProcessingService;
            _usersRepository = usersRepository;
        }

        public ServiceResult<PagedList<UserContract>> GetUsers(int pageNumber, int pageSize, string search)
        {
            var result = new ServiceResult<PagedList<UserContract>>();

            try
            {
                var usersQuery = _usersRepository.Users.AsEnumerable();

                if (!string.IsNullOrWhiteSpace(search))
                {
                    usersQuery = usersQuery.Where(user => user.FirstName.Contains(search) || user.LastName.Contains(search) || user.Email.Contains(search));
                }

                var users = usersQuery.Skip((pageNumber - 1)*pageSize).Take(pageSize).ToList();

                result.Data = new PagedList<UserContract>()
                {
                    PageNumber = pageNumber,
                    PageSize = pageSize,
                    TotalCount = users.Count,
                    Items = users.Select(UserTranslator.ToUserContract).ToList()
                };
            }
            catch (Exception exc)
            {
                _errorProcessingService.ProcessWcfException(exc, result);
            }

            return result;
        }


        public ServiceResult DeleteUser(int userId)
        {
            var result = new ServiceResult();

            try
            {
                var foundUser = _usersRepository.Users.Where(user => user.Id == userId).FirstOrDefault();

                if (foundUser == null)
                {
                    result.Status = ServiceStatus.UserNotFound;
                }
                else
                {
                    _usersRepository.Users.Remove(foundUser);
                }
            }
            catch (Exception exc)
            {
                _errorProcessingService.ProcessWcfException(exc, result);
            }

            return result;
        }
    }
}
