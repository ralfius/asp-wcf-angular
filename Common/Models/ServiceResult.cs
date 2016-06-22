using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Common.Models
{
    public class ServiceResult 
    {
        public StatusResult Status { get; set; }
        public string Message { get; set; }
        public bool Success => Status == StatusResult.Success;

        public void Set(ServiceResult origin)
        {
            Status = origin.Status;
            Message = origin.Message;
        }
    }

    public class ServiceResult<T> : ServiceResult
    {
        public T Data { get; set; }
    }
}