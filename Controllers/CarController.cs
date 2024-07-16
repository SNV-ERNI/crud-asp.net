using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CarStore.Models;
using CarStore.Data;

namespace CarStore.Controllers;

public class CarController : Controller
{
    private ApplicationDbContext _db;

    public CarController(ApplicationDbContext db)
    {
        _db = db;
    }

    public IActionResult Index()
    {
        var cars = _db.Cars.ToList();
        return View(cars);
    }

    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    public IActionResult CreateCar(CarsEntity car)
    {
        if (ModelState.IsValid)
        {
            _db.Cars.Add(car);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
        return View(car);
    }

    public IActionResult ViewCarModal(int id)
    {
        var car = _db.Cars.Find(id);
        return PartialView("_ViewCarModal", car);
    }

    public IActionResult EditCarModal(int id)
    {
        var car = _db.Cars.Find(id);
        return PartialView("_EditCarModal", car);
    }

    // shows edit form-- GET Request

    [HttpPost]
    public IActionResult EditCar(CarsEntity car)
    {
        if (ModelState.IsValid)
        {
            _db.Cars.Update(car);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
        return View(car);

    }

    public IActionResult Delete(int id)
    {
        var car = _db.Cars.Find(id);
        if (car == null)
        {
            return NotFound();
        }
        return View(car);
    }

    public IActionResult DeleteConfirmed(int id)
    {
        var car = _db.Cars.Find(id);
        if (car == null)
        {
            return NotFound();
        }
        _db.Cars.Remove(car);
        _db.SaveChanges();
        return RedirectToAction("Index");
    }

}