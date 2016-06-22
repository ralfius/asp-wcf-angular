using System;
using Common.Interfaces;
using log4net;
using log4net.Config;

namespace Common.Services
{
    public class LogService : ILogService
    {
        private readonly ILog _log;

        public LogService()
        {
            XmlConfigurator.Configure();

            _log = LogManager.GetLogger(typeof(LogService));
        }

        public void LogException(Exception exc, string message = null)
        {
            _log.Error(message, exc);
        }

        public void LogMessage(string message)
        {
            _log.Error(message);
        }
    }
}
