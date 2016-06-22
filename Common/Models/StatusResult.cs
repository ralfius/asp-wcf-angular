using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Common.Models
{
    public enum StatusResult
    {
        Success = 0,
        InvalidModel = 1,

        WCFBusinessLogicError = 101,
        WCFDataAccessError = 102,


        ASPBusinessLogicError = 201,
        ASPDataAccessError = 202
    }
}