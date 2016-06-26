using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;
using Common.Models;
using WCF.DataContracts;

namespace WCF.Contracts
{
    [ServiceContract]
    public interface IUserService
    {
        [OperationContract]
        ServiceResult<PagedList<UserContract>> GetUsers(int pageNumber, int pageSize, string search);

        [OperationContract]
        ServiceResult DeleteUser(int userId);
    }
}
