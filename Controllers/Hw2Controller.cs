using Microsoft.AspNetCore.Mvc;
using Assignment2.Models;
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

        [HttpGet("Calculator")]
        public IActionResult Calculator ()
        {
            return View();
        }

        [HttpPost("Calculator")]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();

        }

    }
}
