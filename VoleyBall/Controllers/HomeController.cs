using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VoleyBall.Data;
namespace VoleyBall.Controllers;

public class HomeController : Controller
{
    private readonly VoleyBallDbContext _context;
    public HomeController(VoleyBallDbContext context)
    {
        _context = context;
    }
    public async Task< IActionResult> Index()
    {
        var sliders = await _context.Sliders.ToListAsync();
        return View(sliders);
    }
}
