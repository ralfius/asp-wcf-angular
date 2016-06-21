using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Common.Models
{
    [DataContract]
    public class PagedList<T>
    {
        [DataMember]
        public int PageNumber { get; set; }
        [DataMember]
        public int PageSize { get; set; }
        [DataMember]
        public int TotalCount { get; set; }

        [DataMember]
        public List<T> Items { get; set; }

        [DataMember]
        public bool IsFirstPage => PageNumber == 1;
        [DataMember]
        public bool IsLastPage => TotalCount <= PageNumber * PageSize;
    }
}
