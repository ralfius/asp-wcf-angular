using ASP.BL.Models;
using ASP.BL.WCFReference;

namespace ASP.BL.Translators
{
    public static class UserTranslator
    {
        public static UserModel ToUserModel(UserContract contract)
        {
            var result = new UserModel() {
                UserId = contract.UserId,
                FirstName = contract.FirstName,
                LastName = contract.LastName,
                Email = contract.Email
            };

            return result;
        }
    }
}
