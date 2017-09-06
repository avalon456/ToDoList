using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using ToDoListApp.Models;

namespace ToDoListApp.Controllers
{
    public class HomeController : Controller
    {
        NoteContext db = new NoteContext();
        [HttpGet]
        public JsonResult AllNotes()
        {
            return Json(db.Notes, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public string Note()
        {
            return db.Notes.FirstOrDefault(x => x.Description == "Запись 1").Description;
        }
        public ActionResult Index()
        {
            return View();
        }
        public IQueryable<Note> GetNotes()
        {
            return db.Notes;
        }
        [HttpPost]
        public ActionResult AddNote(Note note)
        {
            if (note != null)
            {
                db.Notes.Add(note);
                db.SaveChanges();
                return new HttpStatusCodeResult(200);
            }
            else
                return HttpNotFound();
            //return View("~/Views/Home/Index.cshtml");
          /*  if (note != null)
            {
                db.Notes.Add(note);
                db.SaveChanges();
                return View();
            }
            return HttpNotFound();*/
        }
        [HttpPost]
        public ActionResult EditNote(Note note)
        {
            Note SelectedNote = db.Notes.Find(note.Id);
            if (SelectedNote == null || note == null)
                return HttpNotFound();
            SelectedNote.Description = note.Description;
            SelectedNote.Done = note.Done;
            db.Entry(SelectedNote).State = EntityState.Modified;
            db.SaveChanges();
            return new HttpStatusCodeResult(200);
        }
        [HttpGet]
        public ActionResult RemoveNote(string id)
        {
            
            Note note = db.Notes.Find(Int32.Parse(id));
            if(note != null)
            {
                db.Entry(note).State = EntityState.Deleted;
                db.SaveChanges();
                return new HttpStatusCodeResult(200);
            }
            return new HttpStatusCodeResult(400);
            
        }
        
        

    }
}