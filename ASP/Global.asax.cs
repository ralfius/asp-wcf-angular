﻿using Common.Interfaces;
using System;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace ASP
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            DependencyConfig.Register();

            var logService = DependencyResolver.Current.GetService<ILogService>();

            logService.LogMessage("APPLICATION STARTED");
        }

        protected void Application_Error(object sender, EventArgs e)
        {
            Exception exc = Server.GetLastError();

            var errorProcessingService = DependencyResolver.Current.GetService<IErrorProcessingService>();

            errorProcessingService.ProcessException(exc);
        }

        protected void Application_End()
        {
            var logService = DependencyResolver.Current.GetService<ILogService>();

            logService.LogMessage("APPLICATION ENDED");
        }
    }
}
