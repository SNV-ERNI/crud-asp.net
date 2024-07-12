namespace CarStore.Data;

using CarStore.Models;
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext :DbContext {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options) {

    }

    public DbSet<CarsEntity> Cars {get; set;}
}