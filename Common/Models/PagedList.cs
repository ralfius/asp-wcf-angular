using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Common.Models
{
    public class PagedList<T>
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }

        public List<T> Items { get; set; }

        public bool IsFirstPage => PageNumber == 1;
        public bool IsLastPage => TotalCount <= PageNumber * PageSize;
    }
}
