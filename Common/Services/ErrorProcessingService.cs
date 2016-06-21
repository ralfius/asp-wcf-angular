using System;
using System.Data;
using Common.Interfaces;
using Common.Models;
using Common.Resources;

namespace Common.Services
{
    public class ErrorProcessingService : IErrorProcessingService
    {
        private readonly ILogService _logService;

        public ErrorProcessingService(ILogService logService)
        {
            _logService = logService;
        }

        public void ProcessException(Exception exc)
        {
            _logService.LogException(exc);
        }

        public void ProcessWebException(Exception exc, ServiceResult result)
        {
            _logService.LogException(exc);

            if (exc is DataException)
            {
                result.Status = StatusResult.WebDataAccessError;
                result.Message = Errors.WebDataAccessError;
            }
            else
            {
                result.Status = StatusResult.WebBusinessLogicError;
                result.Message = Errors.WebBusinessLogicError;
            }
        }

        public void ProcessWcfException(Exception exc, ServiceResult result)
        {
            _logService.LogException(exc);

            if (exc is DataException)
            {
                result.Status = StatusResult.WCFDataAccessError;
                result.Message = Errors.WCFDataAccessError;
            }
            else
            {
                result.Status = StatusResult.WCFBusinessLogicError;
                result.Message = Errors.WCFBusinessLogicError;
            }
        }
    }
}