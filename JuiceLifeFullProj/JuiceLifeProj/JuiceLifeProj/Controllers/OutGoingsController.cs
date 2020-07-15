using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using JuiceLifeProj;
using Microsoft.Reporting.WebForms;

namespace JuiceLifeProj.Controllers
{
    public class OutgoingsController : Controller
    {
        private DBModel db = new DBModel();

        // GET: Outgoings
        public ActionResult Index()
        {
            return View(db.OutGoings.ToList());
        }

        public ActionResult Reports(string ReportType)
        {
            LocalReport localReport = new LocalReport();
            localReport.ReportPath = Server.MapPath("~/Reports/OutGoingReport.rdlc");

            ReportDataSource reportDataSource = new ReportDataSource();
            reportDataSource.Name = "OutGoingDataSet";
            reportDataSource.Value = db.OutGoings.ToList();
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
            Response.AddHeader("content-disposition", "attachment; filename = customer_report." + fileNameExtension);
            return File(renderByte, fileNameExtension);
        }

        // GET: Outgoings/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OutGoing outgoing = db.OutGoings.Find(id);
            if (outgoing == null)
            {
                return HttpNotFound();
            }
            return View(outgoing);
        }

        // GET: Outgoings/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Outgoings/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "OutGoingId,EmpSalary,SupplierCost,PurchasedFood,Tax,UtilityBills,TransportCost")] OutGoing outGoing)
        {
            if (ModelState.IsValid)
            {
                db.OutGoings.Add(outGoing);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(outGoing);
        }

        // GET: Outgoings/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OutGoing outgoing = db.OutGoings.Find(id);
            if (outgoing == null)
            {
                return HttpNotFound();
            }
            return View(outgoing);
        }

        // POST: Outgoings/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "OutGoingId,EmpSalary,SupplierCost,PurchasedFood,Tax,UtilityBills,TransportCost")] OutGoing outGoing)
        {
            if (ModelState.IsValid)
            {
                db.Entry(outGoing).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(outGoing);
        }

        // GET: Outgoings/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OutGoing outgoing = db.OutGoings.Find(id);
            if (outgoing == null)
            {
                return HttpNotFound();
            }
            return View(outgoing);
        }

        // POST: Outgoings/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            OutGoing outgoing = db.OutGoings.Find(id);
            db.OutGoings.Remove(outgoing);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
