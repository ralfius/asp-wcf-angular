using System.Collections.Generic;
using System.Web;
using System.Web.Optimization;

namespace ASP
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/lib/jquery/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/lib/jquery/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/lib/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/lib/bootstrap.js",
                "~/Scripts/lib/respond.js",
                "~/Scripts/lib/ui-bootstrap-tpls-1.3.3.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/bootstrap-theme.css",
                "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/sandbox").Include(
                "~/Scripts/app/inheritance.js",
                "~/Scripts/app/es6Sandbox.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/lib/angular/angular.js",
                "~/Scripts/lib/angular/angular-route.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/app/helpers.js",
                "~/Scripts/app/app.js",

                "~/Scripts/app/directives/validateSubmit.js",
                "~/Scripts/app/directives/unobtrusiveValidatorParse.js",
                "~/Scripts/app/directives/capitalize.js",
                "~/Scripts/app/directives/removeSpaces.js",

                "~/Scripts/app/components/usersList.js",

                "~/Scripts/app/services/errorProcessingService.js",
                "~/Scripts/app/services/httpConnectionService.js",
                "~/Scripts/app/services/dialogService.js",
                "~/Scripts/app/services/displayMessageService.js",

                "~/Scripts/app/services/userService.js",

                "~/Scripts/app/controllers/yesNoDialogCtrl.js",
                "~/Scripts/app/controllers/messageAreaCtrl.js",
                "~/Scripts/app/controllers/editUserDialogCtrl.js",
                "~/Scripts/app/controllers/usersCtrl.js"));
        }
    }
}
