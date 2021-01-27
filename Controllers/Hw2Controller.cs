using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment2.Controllers
{
    public class Hw2Controller : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calculator ()
        {
            return View();
        }
    }
}
