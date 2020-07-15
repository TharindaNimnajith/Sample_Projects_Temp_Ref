namespace JuiceLifeProj
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Supply")]
    public partial class Supply
    {
        [Key]
        [DisplayName("Supply ID")]
        public int SupplyId { get; set; }

        [DisplayName("Supplier Name")]
        public string SupplierName { get; set; }

        [Required]
        [DisplayName("Item Name")]
        public string ItemName { get; set; }

        [DisplayName("Unit Price")]
        public double UnitPrice { get; set; }

        [DisplayName("No of Units")]
        public int NoOfUnits { get; set; }

        //public double TotalPrice { get; set; }

        [DisplayName("Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        [Column("Date", TypeName = "date")]
        public DateTime Date { get; set; }

        [DisplayName("Expired Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        [Column("ExpiredDate", TypeName = "date")]
        public DateTime? ExpiredDate { get; set; }
    }
}
