namespace JuiceLifeProj
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class User
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public User()
        {
            Invoices = new HashSet<Invoice>();
        }

        [Key]
        public int usr_id { get; set; }

        [Required]
        [StringLength(50)]
        public string usr_name { get; set; }

        [Required]
        [StringLength(50)]
        public string usr_contact { get; set; }

        [Required]
        [StringLength(50)]
        public string usr_password { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Invoice> Invoices { get; set; }
    }
}
