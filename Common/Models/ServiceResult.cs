using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Common.Models
{
    [DataContract]
    public class ServiceResult 
    {
        [DataMember]
        public StatusResult Status { get; set; }
        [DataMember]
        public string Message { get; set; }
        [DataMember]
        public bool Success => Status == StatusResult.Success;

        public void Set(ServiceResult origin)
        {
            Status = origin.Status;
            Message = origin.Message;
        }
    }

    //[DataContract]
    //public class ServiceResult<T> : ServiceResult
    //{
    //    [DataMember]
    //    public T Data { get; set; }
    //}
}