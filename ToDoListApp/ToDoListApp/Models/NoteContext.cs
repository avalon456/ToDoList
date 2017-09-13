using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace ToDoListApp.Models
{
    public class NoteContext: DbContext
    {
        public NoteContext(): base("DefaultConnection"){}
        public DbSet<Note> Notes { get; set; }
    }
}