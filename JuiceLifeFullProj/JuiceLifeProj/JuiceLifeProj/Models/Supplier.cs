namespace JuiceLifeProj
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Supplier")]
    public partial class Supplier
    {
        [Key]
        public int SupplierId { get; set; }

        [Required]
        [StringLength(30)]
        public string SupplierName { get; set; }

        [StringLength(30)]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string SupplierEmail { get; set; }

        [StringLength(10)]
        [DataType(DataType.PhoneNumber)]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Not a valid Phone number")]
        public string SupplierPhone { get; set; }
    }
}
