import { MigrationInterface, QueryRunner } from "typeorm";

export class PurchaseRequestEntity1693839192624 implements MigrationInterface {
    name = 'PurchaseRequestEntity1693839192624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "purchase_request" ("prId" SERIAL NOT NULL, "prDate" TIMESTAMP NOT NULL DEFAULT now(), "requestor" character varying NOT NULL, CONSTRAINT "PK_7901c8a8d4b1acb3ae0ced39a80" PRIMARY KEY ("prId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "purchase_request"`);
    }

}
