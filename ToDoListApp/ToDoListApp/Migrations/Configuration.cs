namespace ToDoListApp.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using ToDoListApp.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<ToDoListApp.Models.NoteContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "ToDoListApp.Models.NoteContext";
        }

        protected override void Seed(ToDoListApp.Models.NoteContext db)
        {
            db.Notes.Add(new Note { Description = "������ 1", Done = false, CreationTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm") });
            db.Notes.Add(new Note { Description = "������ 2", Done = false, CreationTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm") });
            db.Notes.Add(new Note { Description = "������ 3", Done = false, CreationTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm") });
        }
    }
}
