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
            var builder = new ContainerBuilder();

            // Register your service implementations.
            builder.RegisterType<UserService>().AsImplementedInterfaces();
            builder.RegisterType<ErrorProcessingService>().AsImplementedInterfaces();
            builder.RegisterType<UsersRepository>().AsImplementedInterfaces();
            
            // Set the dependency resolver.
            var container = builder.Build();
            AutofacHostFactory.Container = container;
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

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}