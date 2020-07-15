using JuiceLifeProj;
using JuiceLifeProj.Models;
using Microsoft.Reporting.WebForms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JuiceLifeProj.Controllers
{
    public class HomeController : Controller
    {
        DBModel db = new DBModel();
        public ActionResult Index()
        {
            Session["Usr_id"] = 1;
            if (TempData["Cart"] != null)
            {
                float total = 0;
                List<Cart> li2 = TempData["Cart"] as List<Cart>;
                foreach (var item in li2)
                {
                    total += item.bill;
                }
                TempData["tot"] = total;
            }
            TempData.Keep();
            return View(db.Products.OrderByDescending(x => x.pro_id).ToList());
        }
        public ActionResult AddtoCart(int? Id)
        {
            Product p = db.Products.Where(x => x.pro_id == Id).SingleOrDefault();
            return View(p);
        }

        List<Cart> li = new List<Cart>();
        [HttpPost]

        public ActionResult AddtoCart(Product pi, string qty, int Id)
        {
            Product p = db.Products.Where(x => x.pro_id == Id).SingleOrDefault();
            Cart cart1 = new Cart();
            cart1.productid = p.pro_id;
            cart1.productname = p.pro_name;
            cart1.price = (float)p.pro_price;
            cart1.qty = Convert.ToInt32(qty);
            cart1.bill = cart1.price * cart1.qty;
            if (TempData["Cart"] == null)
            {
                li.Add(cart1);
                TempData["Cart"] = li;
            }
            else
            {
                List<Cart> li2 = TempData["Cart"] as List<Cart>;
                int flag = 0;
                foreach (var item in li2)
                {
                    if (item.productid == cart1.productid)
                    {
                        item.qty = cart1.qty;
                        item.bill = cart1.bill;
                        flag = 1;
                    }
                }

                if (flag == 0)
                {
                    li2.Add(cart1);
                }
            }



            TempData.Keep();

            return RedirectToAction("Index");
        }

        public ActionResult Reports(string ReportType)
        {
            LocalReport localReport = new LocalReport();
            localReport.ReportPath = Server.MapPath("~/Reports/SalesReport.rdlc");

            ReportDataSource reportDataSource = new ReportDataSource();
            reportDataSource.Name = "SalesDataSet";
            reportDataSource.Value = db.Invoices.ToList();
            localReport.DataSources.Add(reportDataSource);
            string reportType = ReportType;
            string mimeType;
            string encoding;
            string fileNameExtension;
            if (reportType == "Excel")
            {
                fileNameExtension = "xlsx";
            }
            else if (reportType == "Word")
            {
                fileNameExtension = "docx";
            }
            else if (reportType == "PDF")
            {
                fileNameExtension = "pdf";
            }
            else
            {
                fileNameExtension = "jpg";
            }

            string[] streams;
            Warning[] warnings;
            byte[] renderByte;
            renderByte = localReport.Render(reportType, "", out mimeType, out encoding, out fileNameExtension, out streams, out warnings);
            Response.AddHeader("content-disposition", "attachment; filename = sales_report." + fileNameExtension);
            return File(renderByte, fileNameExtension);
        }

        public ActionResult remove(int? id)
        {
            List<Cart> li2 = TempData["Cart"] as List<Cart>;
            Cart cart2 = li2.Where(x => x.productid == id).SingleOrDefault();
            li2.Remove(cart2);
            float h = 0;
            foreach (var item in li2)
            {
                h += item.bill;
            }
            TempData["tot"] = h;
            return RedirectToAction("checkout");
        }


        public ActionResult checkout()
        {
            TempData.Keep();

            return View();
        }


        [HttpPost]

        public ActionResult checkout(Order o)
        {
            List<Cart> li = TempData["Cart"] as List<Cart>;
            Invoice iv = new Invoice();
            iv.In_fk_users = Convert.ToInt32(Session["Usr_id"].ToString());
            iv.In_date = System.DateTime.Now;
            iv.In_totalbill = (float)TempData["tot"];
            db.Invoices.Add(iv);
            db.SaveChanges();

            foreach (var item in li)
            {
                Order od1 = new Order();
                od1.ord_fk_product = item.productid;
                od1.ord_fk_invoice = iv.In_id;
                od1.ord_date = System.DateTime.Now;
                od1.ord_qty = item.qty;
                od1.ord_unitprice = (int)item.price;
                od1.ord_bill = item.bill;
                db.Orders.Add(od1);
                db.SaveChanges();
            }

            TempData.Remove("tot");
            TempData.Remove("Cart");

            TempData["msg"] = "Transaction Compteted........";
            TempData.Keep();
            return RedirectToAction("Index");

        }

        public ActionResult delivery()
        {
            return View();
        }
    }
}