namespace JuiceLifeProj
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Income")]
    public partial class Income
    {
        public int IncomeId { get; set; }

        public double? SoldFoodItems { get; set; }
    }
}
