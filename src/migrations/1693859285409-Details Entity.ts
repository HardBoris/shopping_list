import { MigrationInterface, QueryRunner } from "typeorm";

export class DetailsEntity1693859285409 implements MigrationInterface {
  name = "DetailsEntity1693859285409";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "details" ("detailId" SERIAL NOT NULL, "item" character varying NOT NULL, "itemType" character varying NOT NULL, "quantity" character varying NOT NULL, "measurement" character varying NOT NULL, "prequestId" integer, CONSTRAINT "PK_36cddbd46976dfad97634879760" PRIMARY KEY ("detailId"))`
    );
    await queryRunner.query(
      `ALTER TABLE "details" ADD CONSTRAINT "FK_56420fa366f747f5aa0ada95dfb" FOREIGN KEY ("prequestId") REFERENCES "purchase_requests"("prId") ON DELETE CASCADE ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "details" DROP CONSTRAINT "FK_56420fa366f747f5aa0ada95dfb"`
    );
    await queryRunner.query(`DROP TABLE "details"`);
  }
}
