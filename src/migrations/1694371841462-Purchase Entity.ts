import { MigrationInterface, QueryRunner } from "typeorm";

export class PurchaseEntity1694371841462 implements MigrationInterface {
    name = 'PurchaseEntity1694371841462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."purchases_logisticmode_enum" AS ENUM('Entrega', 'Retirada')`);
        await queryRunner.query(`CREATE TYPE "public"."purchases_paymentform_enum" AS ENUM('Faturado', 'Cartão', 'Dinheiro')`);
        await queryRunner.query(`CREATE TYPE "public"."purchases_purchasestatus_enum" AS ENUM('Ok', 'Pendente', 'Atrasada')`);
        await queryRunner.query(`CREATE TABLE "purchases" ("purchaseId" SERIAL NOT NULL, "purchaseDate" TIMESTAMP NOT NULL DEFAULT now(), "invoice" character varying, "deliveryDate" TIMESTAMP, "logisticMode" "public"."purchases_logisticmode_enum" NOT NULL DEFAULT 'Entrega', "paymentForm" "public"."purchases_paymentform_enum" NOT NULL DEFAULT 'Faturado', "paymentInstallments" character varying, "purchaseStatus" "public"."purchases_purchasestatus_enum" NOT NULL DEFAULT 'Pendente', "prequest" integer, CONSTRAINT "PK_611866f7af176a877f97cbb76a4" PRIMARY KEY ("purchaseId"))`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD CONSTRAINT "FK_08d943d832eb67683ae82268805" FOREIGN KEY ("prequest") REFERENCES "purchase_requests"("prId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchases" DROP CONSTRAINT "FK_08d943d832eb67683ae82268805"`);
        await queryRunner.query(`DROP TABLE "purchases"`);
        await queryRunner.query(`DROP TYPE "public"."purchases_purchasestatus_enum"`);
        await queryRunner.query(`DROP TYPE "public"."purchases_paymentform_enum"`);
        await queryRunner.query(`DROP TYPE "public"."purchases_logisticmode_enum"`);
    }

}
