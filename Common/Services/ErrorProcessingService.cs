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

        public void SetErrorMessage(ServiceResult result)
        {
            switch (result.Status)
            {
                case ServiceStatus.ASPDataAccessError:
                    result.Message = Errors.ASPDataAccessError;
                    break;
                case ServiceStatus.ASPBusinessLogicError:
                    result.Message = Errors.ASPBusinessLogicError;
                    break;
                case ServiceStatus.WCFDataAccessError:
                    result.Message = Errors.WCFDataAccessError;
                    break;
                case ServiceStatus.WCFBusinessLogicError:
                    result.Message = Errors.WCFBusinessLogicError;
                    break;
                case ServiceStatus.InvalidModel:
                    result.Message = Errors.InvalidModel;
                    break;
                case ServiceStatus.EmailAlreadyTaken:
                    result.Message = Errors.EmailAlreadyTaken;
                    break;
                case ServiceStatus.UserNotFound:
                    result.Message = Errors.UserNotFound;
                    break;
            }
        }

        public void ProcessASPException(Exception exc, ServiceResult result)
        {
            _logService.LogException(exc);

            if (exc is DataException)
            {
                result.Status = ServiceStatus.ASPDataAccessError;
            }
            else
            {
                result.Status = ServiceStatus.ASPBusinessLogicError;                
            }

            SetErrorMessage(result);
        }

        public void ProcessWcfException(Exception exc, ServiceResult result)
        {
            _logService.LogException(exc);

            if (exc is DataException)
            {
                result.Status = ServiceStatus.WCFDataAccessError;                
            }
            else
            {
                result.Status = ServiceStatus.WCFBusinessLogicError;                
            }
        }
    }
}