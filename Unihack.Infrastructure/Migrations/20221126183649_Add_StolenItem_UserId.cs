using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Unihack.Infrastructure.Migrations
{
    public partial class Add_StolenItem_UserId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "StolenItems",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_StolenItems_UserId",
                table: "StolenItems",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_StolenItems_AspNetUsers_UserId",
                table: "StolenItems",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StolenItems_AspNetUsers_UserId",
                table: "StolenItems");

            migrationBuilder.DropIndex(
                name: "IX_StolenItems_UserId",
                table: "StolenItems");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "StolenItems");
        }
    }
}
