namespace JuiceLifeProj
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Stock")]
    public partial class Stock
    {
        [Key]
        public int ItemCode { get; set; }

        [StringLength(50)]
        [Required]
        public string ItemName { get; set; }

        [StringLength(50)]
        [Required]
        public string Type { get; set; }

        [StringLength(50)]
        [Required]
        public string Condition { get; set; }

        [Range(1, 100)]
        [Required]
        public int? Quantity { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        [Column("ExpiredDate", TypeName = "date")]
        [Required]
        public DateTime? ExpiredDate { get; set; }

        [Required]
        public double? UnitPrice { get; set; }

        [StringLength(20)]
        [Required]
        public string SupplierName { get; set; }
    }
}
