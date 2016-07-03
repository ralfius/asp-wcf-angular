using ASP.BL.Models;
using ASP.BL.UserServiceReference;

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

        public static UserContract ToUserContract(UserModel model)
        {
            var result = new UserContract() {
                UserId = model.UserId,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email
            };

            return result;
        }
    }
}
