using System;
using Autofac;
using Autofac.Integration.Wcf;
using Common.Interfaces;
using Common.Services;
using WCF.DAL.Repositories;
using WCF.ServiceContracts;

namespace WCF
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            DependencyConfig.Register();

            var logService = AutofacHostFactory.Container.Resolve<ILogService>();

            logService.LogMessage("APPLICATION STARTED");
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {
            Exception exc = Server.GetLastError();

            var logService = AutofacHostFactory.Container.Resolve<ILogService>();

            logService.LogMessage("APPLICATION STARTED");
        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {
            var logService = AutofacHostFactory.Container.Resolve<ILogService>();

            logService.LogMessage("APPLICATION ENDED");
        }
    }
}