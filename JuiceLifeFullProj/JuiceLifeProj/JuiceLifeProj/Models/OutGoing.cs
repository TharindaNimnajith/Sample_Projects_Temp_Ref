namespace JuiceLifeProj
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("OutGoing")]
    public partial class OutGoing
    {
        public int OutGoingId { get; set; }

        public double? EmpSalary { get; set; }

        public double? SupplierCost { get; set; }

        public double? PurchasedFood { get; set; }

        public double? Tax { get; set; }

        public double? UtilityBills { get; set; }

        public double? TransportCost { get; set; }
    }
}
