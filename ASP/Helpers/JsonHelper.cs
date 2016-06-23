using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Common.Models;

namespace ASP.Helpers
{
    public static class JsonHelper
    {
        public static JsonNetResult GetJsonNetResult<T>(ServiceResult<T> serviceResult, JsonRequestBehavior requestBehavior)
        {
            return new JsonNetResult() { Data = GetCommonResponseObject<T>(serviceResult), JsonRequestBehavior = requestBehavior };
        }

        public static JsonNetResult GetJsonNetResult(ServiceResult serviceResult, JsonRequestBehavior requestBehavior)
        {
            return new JsonNetResult() { Data = GetCommonResponseObject(serviceResult), JsonRequestBehavior = requestBehavior };
        }

        public static JsonNetResult GetInvalidModelResult(string validationError, JsonRequestBehavior requestBehavior)
        {
            return new JsonNetResult() { Data = new { Status = ServiceStatus.InvalidModel, Message = validationError }, JsonRequestBehavior = requestBehavior };
        }

        private static object GetCommonResponseObject<T>(ServiceResult<T> serviceResult)
        {
            return new { Status = serviceResult.Status, Message = serviceResult.Message, Data = serviceResult.Data };
        }

        private static object GetCommonResponseObject(ServiceResult serviceResult)
        {
            return new { Status = serviceResult.Status, Message = serviceResult.Message };
        }
    }
}