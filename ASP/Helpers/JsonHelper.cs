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
        public static JsonNetResult GetJsonNetResult<T>(ServiceResult serviceResult, JsonRequestBehavior requestBehavior)
        {
            return new JsonNetResult() { Data = GetCommonResponseObject(serviceResult), JsonRequestBehavior = requestBehavior };
        }

        public static JsonNetResult GetJsonNetResult(ServiceResult serviceResult, JsonRequestBehavior requestBehavior)
        {
            return new JsonNetResult() { Data = GetCommonResponseObject(serviceResult), JsonRequestBehavior = requestBehavior };
        }

        public static JsonNetResult GetInvalidModelResult(string validationError, JsonRequestBehavior requestBehavior)
        {
            return new JsonNetResult() { Data = new { status = StatusResult.InvalidModel, message = validationError }, JsonRequestBehavior = requestBehavior };
        }

        //private static object GetCommonResponseObject<T>(ServiceResult<T> serviceResult)
        //{
        //    return new { status = serviceResult.Status, message = serviceResult.Message, data = serviceResult.Data };
        //}

        private static object GetCommonResponseObject(ServiceResult serviceResult)
        {
            return new { status = serviceResult.Status, message = serviceResult.Message };
        }
    }
}