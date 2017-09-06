using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace ToDoListApp.Models
{
    public class NoteDbInitializer: DropCreateDatabaseAlways<NoteContext>
    {
        protected override void Seed(NoteContext db)
        {
            db.Notes.Add(new Note { Description = "Запись 1", Done = false, CreationTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm") });
            db.Notes.Add(new Note { Description = "Запись 2", Done = false, CreationTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm") });
            db.Notes.Add(new Note { Description = "Запись 3", Done = false, CreationTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm") });
            base.Seed(db);
        }
    }
}