using Microsoft.EntityFrameworkCore;
using VoleyBall.Models;

namespace VoleyBall.Data
{
    public class VoleyBallDbContext:DbContext
    {
        public DbSet<Slider> Sliders { get; set; }
        public VoleyBallDbContext(DbContextOptions options):base(options)
        {
            
        }
      
    }
}
