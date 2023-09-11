import { MigrationInterface, QueryRunner } from "typeorm";

export class PartnerEntity1694454119299 implements MigrationInterface {
    name = 'PartnerEntity1694454119299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "partners" ("partnerId" uuid NOT NULL DEFAULT uuid_generate_v4(), "fantasyName" character varying NOT NULL, "CNPJ" character varying NOT NULL, "corporateName" character varying, "partnerEmail" character varying, "partnerPhone" character varying, CONSTRAINT "PK_be3dc6eebb4e5dde84249284cda" PRIMARY KEY ("partnerId"))`);
        await queryRunner.query(`CREATE TABLE "partners_element_elements" ("partnersPartnerId" uuid NOT NULL, "elementsElementId" uuid NOT NULL, CONSTRAINT "PK_5af02d8c155da55105d52f440a0" PRIMARY KEY ("partnersPartnerId", "elementsElementId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0891aa36739a6d14f930aaf36e" ON "partners_element_elements" ("partnersPartnerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7b46d435433db44f4b9188aa0d" ON "partners_element_elements" ("elementsElementId") `);
        await queryRunner.query(`ALTER TABLE "purchases" ADD "partner" uuid`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP CONSTRAINT "FK_08d943d832eb67683ae82268805"`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD CONSTRAINT "UQ_08d943d832eb67683ae82268805" UNIQUE ("prequest")`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD CONSTRAINT "FK_08d943d832eb67683ae82268805" FOREIGN KEY ("prequest") REFERENCES "purchase_requests"("prId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD CONSTRAINT "FK_c4266fa6252a748b7f0ece55fef" FOREIGN KEY ("partner") REFERENCES "partners"("partnerId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partners_element_elements" ADD CONSTRAINT "FK_0891aa36739a6d14f930aaf36e5" FOREIGN KEY ("partnersPartnerId") REFERENCES "partners"("partnerId") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "partners_element_elements" ADD CONSTRAINT "FK_7b46d435433db44f4b9188aa0d4" FOREIGN KEY ("elementsElementId") REFERENCES "elements"("elementId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "partners_element_elements" DROP CONSTRAINT "FK_7b46d435433db44f4b9188aa0d4"`);
        await queryRunner.query(`ALTER TABLE "partners_element_elements" DROP CONSTRAINT "FK_0891aa36739a6d14f930aaf36e5"`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP CONSTRAINT "FK_c4266fa6252a748b7f0ece55fef"`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP CONSTRAINT "FK_08d943d832eb67683ae82268805"`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP CONSTRAINT "UQ_08d943d832eb67683ae82268805"`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD CONSTRAINT "FK_08d943d832eb67683ae82268805" FOREIGN KEY ("prequest") REFERENCES "purchase_requests"("prId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP COLUMN "partner"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7b46d435433db44f4b9188aa0d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0891aa36739a6d14f930aaf36e"`);
        await queryRunner.query(`DROP TABLE "partners_element_elements"`);
        await queryRunner.query(`DROP TABLE "partners"`);
    }

}
