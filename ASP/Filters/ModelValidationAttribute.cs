using ASP.Helpers;
using Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace ASP.Filters
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = true)]
    public class ModelValidationAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext actionContext)
        {
            base.OnActionExecuting(actionContext);

            if (!actionContext.Controller.ViewData.ModelState.IsValid)
            {
                var validationResult = new ServiceResult(ServiceStatus.InvalidModel,
                    GetErrorMessage(actionContext.Controller.ViewData.ModelState.Values));

                actionContext.Result = JsonHelper.GetJsonNetResult(validationResult, JsonRequestBehavior.DenyGet);
            }
        }

        protected string GetErrorMessage(ICollection<ModelState> modelValues)
        {
            var messages = new List<string>();

            foreach (var error in modelValues.SelectMany(v => v.Errors))
            {
                if (!string.IsNullOrEmpty(error.ErrorMessage))
                    messages.Add(error.ErrorMessage);

                if (error.Exception != null)
                    messages.Add(error.Exception.Message);
            }

            return string.Join(" ", messages);
        }
    }
}