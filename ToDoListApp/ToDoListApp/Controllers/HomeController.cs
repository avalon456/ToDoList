using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using ToDoListApp.Models;

namespace ToDoListApp.Controllers
{
    [RequireHttps]
    public class HomeController : Controller
    {
        NoteContext db = new NoteContext();
        //[Authorize]
        [HttpGet]
        public JsonResult AllNotes()
        {
            return Json(db.Notes, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public ActionResult GetNote(int id)
        {
            return View("~/Views/Home/Index.cshtml");
            //return Json(db.Notes.FirstOrDefault(), JsonRequestBehavior.AllowGet);//(x => x.Description == "Запись 1");
        }
        //[Authorize]
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
        [HttpPost]
        public ActionResult RemoveNote(int id)
        {
            
            Note note = db.Notes.Find(id);
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