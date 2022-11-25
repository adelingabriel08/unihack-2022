using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Unihack.Infrastructure.Migrations
{
    public partial class StolenItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "StolenItemTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedTimeUtc = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedTimeUtc = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StolenItemTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StolenItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StolenItemId = table.Column<int>(type: "int", nullable: false),
                    SerialNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Color = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Size = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StolenItemTypeId = table.Column<int>(type: "int", nullable: true),
                    CreatedTimeUtc = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedTimeUtc = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StolenItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StolenItems_StolenItemTypes_StolenItemTypeId",
                        column: x => x.StolenItemTypeId,
                        principalTable: "StolenItemTypes",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_StolenItems_StolenItemTypeId",
                table: "StolenItems",
                column: "StolenItemTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StolenItems");

            migrationBuilder.DropTable(
                name: "StolenItemTypes");
        }
    }
}
