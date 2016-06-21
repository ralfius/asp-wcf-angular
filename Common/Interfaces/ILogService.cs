using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Interfaces
{
    public interface ILogService
    {
        void LogException(Exception exc, string message = null);
        void LogMessage(string message);
    }
}
