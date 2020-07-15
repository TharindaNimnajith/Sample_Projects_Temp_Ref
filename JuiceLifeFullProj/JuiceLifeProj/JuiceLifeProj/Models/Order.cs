namespace JuiceLifeProj
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Order
    {
        [Key]
        public int ord_id { get; set; }

        public int? ord_fk_product { get; set; }

        public int? ord_fk_invoice { get; set; }

        public DateTime? ord_date { get; set; }

        public int? ord_qty { get; set; }

        public double? ord_bill { get; set; }

        public int? ord_unitprice { get; set; }

        public virtual Invoice Invoice { get; set; }

        public virtual Product Product { get; set; }
    }
}
