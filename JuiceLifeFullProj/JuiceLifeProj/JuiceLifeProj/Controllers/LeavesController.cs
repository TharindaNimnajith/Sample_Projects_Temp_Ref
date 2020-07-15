using Microsoft.Reporting.WebForms;
using System;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace JuiceLifeProj.Controllers
{
    public class LeavesController : Controller
    {
        private DBModel db = new DBModel();

        public ActionResult Index()
        {
            return View(db.Leaves.ToList());
        }

        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Leave leave = db.Leaves.Find(id);
            if (leave == null)
            {
                return HttpNotFound();
            }
            return View(leave);
        }

        // GET: Leaves/Create
        public ActionResult Create()
        {
            DBModel mdl1 = new DBModel();
            var getEmployeeList = mdl1.Employees.ToList();
            SelectList list = new SelectList(getEmployeeList, "EmployeeName", "EmployeeName");
            ViewBag.employeeListName = list;

            return View();
        }

        // POST: Leaves/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "LeaveId,EmployeeName,Reason,LeaveType,StartDate,EndDate,Length,Status,Document")] Leave leave, HttpPostedFileBase ImageFile)
        {
            string ImageFileName = Path.GetFileName(ImageFile.FileName);

            ImageFileName = DateTime.Now.ToString("yymmssfff") + Path.GetExtension(ImageFile.FileName);
            leave.Document = "~/Image/" + ImageFileName;

            string FolderPath = Path.Combine(Server.MapPath("~/Image"), ImageFileName);
            ImageFile.SaveAs(FolderPath);

            if (ModelState.IsValid)
            {
                db.Leaves.Add(leave);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ModelState.Clear();
            return View(leave);
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Leave leave = db.Leaves.Find(id);
            if (leave == null)
            {
                return HttpNotFound();
            }
            return View(leave);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "LeaveId,EmployeeName,Reason,LeaveType,StartDate,EndDate,Length,Status,Document")] Leave leave)
        {
            if (ModelState.IsValid)
            {
                db.Entry(leave).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(leave);
        }

        public ActionResult Reports(string ReportType)
        {
            LocalReport localReport = new LocalReport();
            localReport.ReportPath = Server.MapPath("~/Reports/LeaveReport.rdlc");

            ReportDataSource reportDataSource = new ReportDataSource();
            reportDataSource.Name = "LeaveDataSet";
            reportDataSource.Value = db.Leaves.ToList();
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
            Response.AddHeader("content-disposition", "attachment; filename = leave_report." + fileNameExtension);
            return File(renderByte, fileNameExtension);
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Leave leave = db.Leaves.Find(id);
            if (leave == null)
            {
                return HttpNotFound();
            }
            return View(leave);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Leave leave = db.Leaves.Find(id);
            db.Leaves.Remove(leave);
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
