using System;
using Common.Interfaces;
using log4net;
using log4net.Config;

namespace Common.Services
{
    public class LogService : ILogService
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(LogService));

        public LogService()
        {
            BasicConfigurator.Configure();
        }

        public void LogException(Exception exc, string message = null)
        {
            log.Error(message, exc);
        }

        public void LogMessage(string message)
        {
            log.Error(message);
        }
    }
}
