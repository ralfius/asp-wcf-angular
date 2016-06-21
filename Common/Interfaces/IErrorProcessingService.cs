using System;
using Common.Models;

namespace Common.Interfaces
{
    public interface IErrorProcessingService
    {
        void ProcessException(Exception exc);
        void ProcessWebException(Exception exc, ServiceResult result);
        void ProcessWcfException(Exception exc, ServiceResult result);
    }
}