namespace JuiceLifeProj
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Employee")]
    public partial class Employee
    {
        public int EmployeeId { get; set; }

        [DisplayName("Employee Name")]
        [Required(ErrorMessage = "Name is required")]
        [StringLength(20)]
        public string EmployeeName { get; set; }

        [DisplayName("Employee Address")]
        [Required(ErrorMessage = "Address is required")]
        [StringLength(100)]
        public string EmployeeAddress { get; set; }

        [DisplayName("Employee Position")]
        [Required(ErrorMessage = "Position is required")]
        [StringLength(20)]
        public string EmployeePosition { get; set; }

        [Required(ErrorMessage = "PhoneNo is required")]
        [DisplayName("Employee Phone")]
        [StringLength(10)]
        public string EmployeePhone { get; set; }

        [DisplayName("Employee Email")]
        [Required(ErrorMessage = "Email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email address")]
        [StringLength(30)]
        public string EmployeeEmail { get; set; }
    }
}

