using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDoListApp.Models
{
    public class Note
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public bool Done { get; set; }
        public DateTime CreationTime { get; set; }
        public string UserId { get; set; }
        public string Priority { get; set; }
    }
}