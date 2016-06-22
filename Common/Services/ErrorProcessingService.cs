﻿using System;
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

        public void ProcessASPException(Exception exc, ServiceResult result)
        {
            _logService.LogException(exc);

            if (exc is DataException)
            {
                result.Status = StatusResult.ASPDataAccessError;
                result.Message = Errors.ASPDataAccessError;
            }
            else
            {
                result.Status = StatusResult.ASPBusinessLogicError;
                result.Message = Errors.ASPBusinessLogicError;
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