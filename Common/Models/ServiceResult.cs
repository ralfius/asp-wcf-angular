using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Common.Models
{
    public class ServiceResult 
    {
        public ServiceStatus Status { get; set; }
        public string Message { get; set; }
        public bool Success => Status == ServiceStatus.Success;

        public void Set(ServiceResult origin)
        {
            Status = origin.Status;
            Message = origin.Message;
        }

        public ServiceResult()
        {
            Status = ServiceStatus.Success;
        }

        public ServiceResult(ServiceStatus status, string message)
        {
            Status = status;
            Message = message;
        }
    }

    public class ServiceResult<T> : ServiceResult
    {
        public T Data { get; set; }

        public ServiceResult() : base() { }

        public ServiceResult(ServiceStatus status, string message)
            :base(status, message) { }
    }
}