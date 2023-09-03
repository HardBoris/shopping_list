import { MigrationInterface, QueryRunner } from "typeorm";

export class ShoppingEntity1693779220795 implements MigrationInterface {
    name = 'ShoppingEntity1693779220795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shopping" ("shoppingId" SERIAL NOT NULL, "shoppingDate" TIMESTAMP NOT NULL DEFAULT now(), "requestor" character varying NOT NULL, CONSTRAINT "PK_cfcc4b651c2f6728d0036c6f84f" PRIMARY KEY ("shoppingId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "shopping"`);
    }

}
