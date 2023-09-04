import { MigrationInterface, QueryRunner } from "typeorm";

export class PurchaseRequestEntity1693843411644 implements MigrationInterface {
    name = 'PurchaseRequestEntity1693843411644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "purchase_requests" ("prId" SERIAL NOT NULL, "prDate" TIMESTAMP NOT NULL DEFAULT now(), "requestorId" uuid, CONSTRAINT "PK_7be1aa75bc0c24fca59b16cdd26" PRIMARY KEY ("prId"))`);
        await queryRunner.query(`ALTER TABLE "purchase_requests" ADD CONSTRAINT "FK_92d082d9d41d52393a70d34e454" FOREIGN KEY ("requestorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchase_requests" DROP CONSTRAINT "FK_92d082d9d41d52393a70d34e454"`);
        await queryRunner.query(`DROP TABLE "purchase_requests"`);
    }

}
