using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Common.Models
{
    public enum ServiceStatus
    {
        Success = 0,
        InvalidModel = 1,
        UserNotFound = 2,
        EmailAlreadyTaken = 3,

        WCFBusinessLogicError = 101,
        WCFDataAccessError = 102,


        ASPBusinessLogicError = 201,
        ASPDataAccessError = 202
    }
}