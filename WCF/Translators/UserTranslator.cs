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
                LastName = entity.LastName
            };

            return result;
        }
    }
}