namespace JuiceLifeProj
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Menu")]
    public partial class Menu
    {
        public int MenuId { get; set; }

        [Required]
        [StringLength(30)]
        public string Name { get; set; }

        [Required]
        [StringLength(100)]
        public string Ingredients { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        [Column("Date", TypeName = "date")]
        public DateTime Date { get; set; }

        [StringLength(50)]
        public string Note { get; set; }

        public double Price { get; set; }

        [Required]
        [StringLength(200)]
        public string Description { get; set; }
    }
}
