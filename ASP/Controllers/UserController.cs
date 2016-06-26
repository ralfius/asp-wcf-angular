using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using ASP.BL.Interfaces;
using ASP.Helpers;

namespace ASP.Controllers
{
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<JsonResult> List(int pageNumber, string search = null, int pageSize = 0)
        {
            var serviceResult = await _userService.GetUsersAsync(pageNumber, search, pageSize);

            return JsonHelper.GetJsonNetResult(serviceResult, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public async Task<JsonResult> Delete(int userId)
        {
            var serviceResult = await _userService.DeleteUserAsync(userId);

            return JsonHelper.GetJsonNetResult(serviceResult, JsonRequestBehavior.DenyGet);
        }
    }
}