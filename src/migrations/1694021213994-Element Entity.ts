import { MigrationInterface, QueryRunner } from "typeorm";

export class ElementEntity1694021213994 implements MigrationInterface {
    name = 'ElementEntity1694021213994'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "details" DROP CONSTRAINT "FK_56420fa366f747f5aa0ada95dfb"`);
        await queryRunner.query(`CREATE TABLE "elements" ("elementId" uuid NOT NULL DEFAULT uuid_generate_v4(), "element" character varying NOT NULL, "elementType" character varying NOT NULL, "defaultUnit" character varying NOT NULL, "active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_2859c49f0fdd663ed7ac046a8ba" PRIMARY KEY ("elementId"))`);
        await queryRunner.query(`ALTER TABLE "details" DROP COLUMN "item"`);
        await queryRunner.query(`ALTER TABLE "details" DROP COLUMN "itemType"`);
        await queryRunner.query(`ALTER TABLE "details" ADD "elementId" uuid`);
        await queryRunner.query(`ALTER TABLE "details" ADD CONSTRAINT "FK_56420fa366f747f5aa0ada95dfb" FOREIGN KEY ("prequestId") REFERENCES "purchase_requests"("prId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "details" ADD CONSTRAINT "FK_b34591b5aaf3ad23c624abdc706" FOREIGN KEY ("elementId") REFERENCES "elements"("elementId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "details" DROP CONSTRAINT "FK_b34591b5aaf3ad23c624abdc706"`);
        await queryRunner.query(`ALTER TABLE "details" DROP CONSTRAINT "FK_56420fa366f747f5aa0ada95dfb"`);
        await queryRunner.query(`ALTER TABLE "details" DROP COLUMN "elementId"`);
        await queryRunner.query(`ALTER TABLE "details" ADD "itemType" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "details" ADD "item" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "elements"`);
        await queryRunner.query(`ALTER TABLE "details" ADD CONSTRAINT "FK_56420fa366f747f5aa0ada95dfb" FOREIGN KEY ("prequestId") REFERENCES "purchase_requests"("prId") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
