using Microsoft.EntityFrameworkCore.Migrations;

namespace MinTur.DataAccess.Migrations
{
    public partial class ChangeIdentifierAttribute : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Indetifier",
                table: "ChargingPoints");

            migrationBuilder.AddColumn<string>(
                name: "Identifier",
                table: "ChargingPoints",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Identifier",
                table: "ChargingPoints");

            migrationBuilder.AddColumn<string>(
                name: "Indetifier",
                table: "ChargingPoints",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
