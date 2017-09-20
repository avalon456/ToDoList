namespace ToDoListApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LastMigration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Notes", "UserId", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Notes", "UserId");
        }
    }
}