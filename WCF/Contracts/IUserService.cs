using System.ServiceModel;
using Common.Models;
using WCF.DataContracts;
using System.Net.Security;

namespace WCF.Contracts
{
    [ServiceContract]
    public interface IUserService
    {
        [OperationContract(ProtectionLevel = ProtectionLevel.EncryptAndSign)]
        ServiceResult<PagedList<UserContract>> GetUsers(int pageNumber, int pageSize, string search);

        [OperationContract]
        ServiceResult DeleteUser(int userId);

        [OperationContract]
        ServiceResult<UserContract> CreateUser(UserContract user);

        [OperationContract]
        ServiceResult<UserContract> UpdateUser(UserContract user);
    }
}
