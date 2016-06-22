using Autofac;
using Autofac.Integration.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASP
{
    public class DependencyConfig
    {
        public static void Register()
        {
            var builder = new ContainerBuilder();

            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            builder.RegisterAssemblyTypes(typeof(ASP.BL.Services.UserService).Assembly)
                   .Where(t => t.Name.EndsWith("Service"))
                   .AsImplementedInterfaces()
                   .InstancePerLifetimeScope();

            builder.RegisterAssemblyTypes(typeof(Common.Services.LogService).Assembly)
                   .Where(t => t.Name.EndsWith("Service") 
                       && !t.Name.Contains("Log")
                       && !t.Name.Contains("ErrorProcessing"))
                   .AsImplementedInterfaces()
                   .InstancePerLifetimeScope();

            builder.RegisterType<Common.Services.LogService>()
                .AsImplementedInterfaces()
                .SingleInstance();

            builder.RegisterType<Common.Services.ErrorProcessingService>()
                .AsImplementedInterfaces()
                .SingleInstance();

            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}