﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Web.BL.Interfaces;
using Web.Helpers;

namespace Web.Controllers
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
    }
}