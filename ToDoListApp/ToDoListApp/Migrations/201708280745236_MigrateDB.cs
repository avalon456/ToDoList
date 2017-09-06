namespace ToDoListApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MigrateDB : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Notes", "CreationTime", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Notes", "CreationTime", c => c.DateTime(nullable: false));
        }
    }
}
