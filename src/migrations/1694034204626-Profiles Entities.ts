import { MigrationInterface, QueryRunner } from "typeorm";

export class ProfilesEntities1694034204626 implements MigrationInterface {
    name = 'ProfilesEntities1694034204626'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "midia_profiles" ("midiaProfileId" uuid NOT NULL DEFAULT uuid_generate_v4(), "width" character varying NOT NULL, "height" character varying NOT NULL, "thick" character varying NOT NULL, "minimumStock" character varying NOT NULL, "idealStock" character varying NOT NULL, CONSTRAINT "PK_fd48fdf5488c043c5501cee6385" PRIMARY KEY ("midiaProfileId"))`);
        await queryRunner.query(`CREATE TABLE "stuff_profiles" ("stuffProfileId" uuid NOT NULL DEFAULT uuid_generate_v4(), "stuffPacking" character varying NOT NULL, "stuffPerPacking" character varying NOT NULL, "minimumStock" character varying NOT NULL, "idealStock" character varying NOT NULL, CONSTRAINT "PK_d7c94dc2eef2afeb4e293882fc2" PRIMARY KEY ("stuffProfileId"))`);
        await queryRunner.query(`CREATE TABLE "tool_profiles" ("toolProfileId" uuid NOT NULL DEFAULT uuid_generate_v4(), "toolModel" character varying, "toolPower" character varying, CONSTRAINT "PK_a8884dc91107db164a671eb6dd6" PRIMARY KEY ("toolProfileId"))`);
        await queryRunner.query(`ALTER TABLE "elements" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "elements" ADD "midiaProfileId" uuid`);
        await queryRunner.query(`ALTER TABLE "elements" ADD CONSTRAINT "UQ_bea03a3416d4c5de2463f6e5d99" UNIQUE ("midiaProfileId")`);
        await queryRunner.query(`ALTER TABLE "elements" ADD "stuffProfileId" uuid`);
        await queryRunner.query(`ALTER TABLE "elements" ADD CONSTRAINT "UQ_679c30e92a3e5d3176103bad15d" UNIQUE ("stuffProfileId")`);
        await queryRunner.query(`ALTER TABLE "elements" ADD "toolProfileId" uuid`);
        await queryRunner.query(`ALTER TABLE "elements" ADD CONSTRAINT "UQ_b9dcd81d0acae393b8b067d0456" UNIQUE ("toolProfileId")`);
        await queryRunner.query(`ALTER TABLE "elements" ADD CONSTRAINT "FK_bea03a3416d4c5de2463f6e5d99" FOREIGN KEY ("midiaProfileId") REFERENCES "midia_profiles"("midiaProfileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "elements" ADD CONSTRAINT "FK_679c30e92a3e5d3176103bad15d" FOREIGN KEY ("stuffProfileId") REFERENCES "stuff_profiles"("stuffProfileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "elements" ADD CONSTRAINT "FK_b9dcd81d0acae393b8b067d0456" FOREIGN KEY ("toolProfileId") REFERENCES "tool_profiles"("toolProfileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "elements" DROP CONSTRAINT "FK_b9dcd81d0acae393b8b067d0456"`);
        await queryRunner.query(`ALTER TABLE "elements" DROP CONSTRAINT "FK_679c30e92a3e5d3176103bad15d"`);
        await queryRunner.query(`ALTER TABLE "elements" DROP CONSTRAINT "FK_bea03a3416d4c5de2463f6e5d99"`);
        await queryRunner.query(`ALTER TABLE "elements" DROP CONSTRAINT "UQ_b9dcd81d0acae393b8b067d0456"`);
        await queryRunner.query(`ALTER TABLE "elements" DROP COLUMN "toolProfileId"`);
        await queryRunner.query(`ALTER TABLE "elements" DROP CONSTRAINT "UQ_679c30e92a3e5d3176103bad15d"`);
        await queryRunner.query(`ALTER TABLE "elements" DROP COLUMN "stuffProfileId"`);
        await queryRunner.query(`ALTER TABLE "elements" DROP CONSTRAINT "UQ_bea03a3416d4c5de2463f6e5d99"`);
        await queryRunner.query(`ALTER TABLE "elements" DROP COLUMN "midiaProfileId"`);
        await queryRunner.query(`ALTER TABLE "elements" DROP COLUMN "description"`);
        await queryRunner.query(`DROP TABLE "tool_profiles"`);
        await queryRunner.query(`DROP TABLE "stuff_profiles"`);
        await queryRunner.query(`DROP TABLE "midia_profiles"`);
    }

}
