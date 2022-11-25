using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Unihack.Infrastructure.Migrations
{
    public partial class fix_StolenItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StolenItems_StolenItemTypes_StolenItemTypeId",
                table: "StolenItems");

            migrationBuilder.DropColumn(
                name: "StolenItemId",
                table: "StolenItems");

            migrationBuilder.AlterColumn<int>(
                name: "StolenItemTypeId",
                table: "StolenItems",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_StolenItems_StolenItemTypes_StolenItemTypeId",
                table: "StolenItems",
                column: "StolenItemTypeId",
                principalTable: "StolenItemTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StolenItems_StolenItemTypes_StolenItemTypeId",
                table: "StolenItems");

            migrationBuilder.AlterColumn<int>(
                name: "StolenItemTypeId",
                table: "StolenItems",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "StolenItemId",
                table: "StolenItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_StolenItems_StolenItemTypes_StolenItemTypeId",
                table: "StolenItems",
                column: "StolenItemTypeId",
                principalTable: "StolenItemTypes",
                principalColumn: "Id");
        }
    }
}
