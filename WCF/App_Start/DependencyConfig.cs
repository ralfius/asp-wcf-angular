using Autofac;
using Autofac.Integration.Wcf;
using System.Linq;

namespace WCF
{
    public class DependencyConfig
    {
        public static void Register()
        {
            var builder = new ContainerBuilder();

            builder.RegisterType<WCF.ServiceContracts.UserService>()
                .As<WCF.Contracts.IUserService>();

            //builder.RegisterAssemblyTypes(typeof(WCF.ServiceContracts.UserService).Assembly)
            //    .Where(t => t.Name.EndsWith("Service"))
            //    .AsImplementedInterfaces()
            //    .InstancePerLifetimeScope();

            builder.RegisterAssemblyTypes(typeof(Common.Services.LogService).Assembly)
                .Where(t => t.Name.EndsWith("Service")
                    && !t.Name.Contains("Log")
                    && !t.Name.Contains("ErrorProcessing"))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();

            builder.RegisterAssemblyTypes(typeof(WCF.DAL.Repositories.UsersRepository).Assembly)
                .Where(t => t.Name.EndsWith("Repository"))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();

            builder.RegisterType<Common.Services.LogService>()
                .AsImplementedInterfaces()
                .SingleInstance();

            builder.RegisterType<Common.Services.ErrorProcessingService>()
                .AsImplementedInterfaces()
                .SingleInstance();

            var container = builder.Build();
            AutofacHostFactory.Container = container;
        }
    }
}