namespace JuiceLifeProj
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using System.Web;

    [Table("Leave")]
    public partial class Leave
    {
        [DisplayName("Leave ID")]
        [Key]
        [Column("LeaveID")]
        public int LeaveId{ get; set; }

        [DisplayName("Employee Name")]
        [Column("EmployeeName")]
        [StringLength(50)]
        public string EmployeeName { get; set; }


        [StringLength(50)]
        public string Reason { get; set; }

        [DisplayName("Leave Type")]
        [Column("LeaveType")]
        [StringLength(50)]
        public string LeaveType { get; set; }

        [DisplayName("Start Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-mm-dd}", ApplyFormatInEditMode = true)]
        [Column("StartDate", TypeName = "date")]
        public DateTime? StartDate { get; set; }

        [DisplayName("End Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        [Column("EndDate", TypeName = "date")]
        public DateTime? EndDate { get; set; }

        public int? Length { get; set; }

        [StringLength(50)]
        public string Status { get; set; }

        [DisplayName("Document Image Upload")]
        [Column("Document")]
        [StringLength(50)]
        public string Document { get; set; }

        [NotMapped]
        public HttpPostedFileBase ImageFile { get; set; }
    }
}
