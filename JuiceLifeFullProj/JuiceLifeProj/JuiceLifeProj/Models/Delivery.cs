namespace JuiceLifeProj
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Delivery")]
    public partial class Delivery
    {
        public int DeliveryId { get; set; }

        [Required]
        [StringLength(50)]
        public string CustomerName { get; set; }

        [Required]
        [StringLength(50)]
        public string DeliveryPerson { get; set; }

        public double Amount { get; set; }

        [Required]
        [StringLength(200)]
        public string DeliveryAddress { get; set; }

        [Required]
        [StringLength(50)]
        public string ProductName { get; set; }
    }
}
