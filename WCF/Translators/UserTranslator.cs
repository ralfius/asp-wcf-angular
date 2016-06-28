using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WCF.DataContracts;
using WCF.DAL.Entites;

namespace WCF.Translators
{
    static class UserTranslator
    {
        public static UserContract ToUserContract(User entity)
        {
            var result = new UserContract() {
                UserId = entity.Id,
                FirstName = entity.FirstName,
                LastName = entity.LastName,
                Email = entity.Email
            };

            return result;
        }

        public static User ToUser(UserContract contract)
        {
            var result = new User();

            UpdateExistingUser(contract, result);

            return result;
        }

        public static void UpdateExistingUser(UserContract contract, User entity)
        {
            entity.FirstName = contract.FirstName;
            entity.LastName = contract.LastName;
            entity.Email = contract.Email;
        }
    }
}