using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Common.Models
{
    public class PagedList
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }

        public bool IsFirstPage => PageNumber == 1;
        public bool IsLastPage => TotalCount <= PageNumber * PageSize;

        public void Set(PagedList list)
        {
            PageNumber = list.PageNumber;
            PageSize = list.PageSize;
            TotalCount = list.TotalCount;
        }
    }

    public class PagedList<T> : PagedList
    {
        public List<T> Items { get; set; }
    }
}
