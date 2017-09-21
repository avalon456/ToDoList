namespace ToDoListApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MigrateDB21 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Notes", "Priority", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Notes", "Priority");
        }
    }
}
