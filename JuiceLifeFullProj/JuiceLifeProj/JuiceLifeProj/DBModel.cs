namespace JuiceLifeProj
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class DBModel : DbContext
    {
        public DBModel()
            : base("name=DBModel")
        {
        }

        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Delivery> Deliveries { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Income> Incomes { get; set; }
        public virtual DbSet<Leave> Leaves { get; set; }
        public virtual DbSet<Menu> Menus { get; set; }
        public virtual DbSet<OutGoing> OutGoings { get; set; }
        public virtual DbSet<Stock> Stocks { get; set; }
        public virtual DbSet<Supplier> Suppliers { get; set; }
        public virtual DbSet<Supply> Supplies { get; set; }
        public virtual DbSet<Invoice> Invoices { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>()
                .Property(e => e.Gender)
                .IsFixedLength();

            modelBuilder.Entity<Employee>()
                .Property(e => e.EmployeePhone)
                .IsFixedLength();

            modelBuilder.Entity<Leave>()
                .Property(e => e.EmployeeName)
                .IsFixedLength();

            modelBuilder.Entity<Leave>()
                .Property(e => e.Reason)
                .IsFixedLength();

            modelBuilder.Entity<Leave>()
                .Property(e => e.LeaveType)
                .IsFixedLength();

            modelBuilder.Entity<Supplier>()
                .Property(e => e.SupplierPhone)
                .IsFixedLength();

            modelBuilder.Entity<Invoice>()
                .HasMany(e => e.Orders)
                .WithOptional(e => e.Invoice)
                .HasForeignKey(e => e.ord_fk_invoice);

            modelBuilder.Entity<Product>()
                .HasMany(e => e.Orders)
                .WithOptional(e => e.Product)
                .HasForeignKey(e => e.ord_fk_product);

            modelBuilder.Entity<User>()
                .HasMany(e => e.Invoices)
                .WithOptional(e => e.User)
                .HasForeignKey(e => e.In_fk_users);
        }
    }
}
