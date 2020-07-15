using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JuiceLifeProj.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(string username,string password)
        {
            if(username.Equals("employee") && password.Equals("employee"))
            {
                Session["username"] = "username";
                return View("employee");
            }
            else if (username.Equals("owner") && password.Equals("owner"))
            {
                Session["username"] = "username";
                return View("owner");
            }
            else if (username.Equals("customer") && password.Equals("customer"))
            {
                Session["username"] = "username";
                return View("customer");
            }
            else
            {
                ViewBag.error = "Invalid Username or Password";
                return View("Index");
            }

        }

        [HttpGet]
        public ActionResult Logout()
        {
            Session.Remove("username");
            return RedirectToAction("Index");
        }
    }
}