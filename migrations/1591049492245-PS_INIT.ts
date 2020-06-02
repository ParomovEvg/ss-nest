import {MigrationInterface, QueryRunner} from "typeorm";

export class PSINIT1591049492245 implements MigrationInterface {
    name = 'PSINIT1591049492245'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "checkout" ("id" SERIAL NOT NULL, "fn" character varying(16) NOT NULL, "address" text NOT NULL, CONSTRAINT "PK_c3c52ebf395ba358759b1111ac1" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "draw" ("id" SERIAL NOT NULL, "start" TIMESTAMP WITH TIME ZONE DEFAULT null, "end" TIMESTAMP WITH TIME ZONE DEFAULT null, "description" text NOT NULL, "sLimit" bigint NOT NULL, "qrLimit" bigint NOT NULL, "qrLimitPeriodMS" bigint NOT NULL, CONSTRAINT "PK_93d305b8405e4b975c54d609dc8" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "qr" ("id" SERIAL NOT NULL, "fp" character varying(10) NOT NULL, "fd" character varying(10) NOT NULL, "s" bigint NOT NULL, "time" TIMESTAMP NOT NULL DEFAULT now(), "phoneId" integer, "checkoutId" integer, "drawId" integer, CONSTRAINT "PK_49a4316084cad5ba127bd32cfb3" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "phone" ("id" SERIAL NOT NULL, "phone" character varying(11) NOT NULL, "registrationDate" TIMESTAMP NOT NULL DEFAULT now(), "isAdmin" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_c022eb633e3a0b81de5dac4002b" UNIQUE ("phone"), CONSTRAINT "PK_f35e6ee6c1232ce6462505c2b25" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "password" ("id" SERIAL NOT NULL, "password" text NOT NULL, "passwordDate" TIMESTAMP NOT NULL DEFAULT now(), "phoneId" integer, CONSTRAINT "PK_cbeb55948781be9257f44febfa0" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "content_img" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "path" character varying NOT NULL, "host" character varying NOT NULL, "fieldId" integer, CONSTRAINT "PK_ca887aa50034f23fecce18fe2c9" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "content_md" ("id" SERIAL NOT NULL, "value" text NOT NULL, "fieldId" integer, CONSTRAINT "PK_2f14f62be9828fd8c6b5148614a" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "content_md_field" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "label" text NOT NULL, "screenId" integer, CONSTRAINT "PK_f985b4fec22989b007afdf3d5a9" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "content_text" ("id" SERIAL NOT NULL, "value" text NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "fieldId" integer, CONSTRAINT "PK_76509fad66097926b96800f3f79" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "content_text_field" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "screenId" integer, CONSTRAINT "PK_f8c32979f6c644338d0c3d50691" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "content_screen" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "UQ_ea859d38e413326503bba93bee7" UNIQUE ("name"), CONSTRAINT "PK_45b452d8f656220145b971693ae" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "content_img_field" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "screenId" integer, CONSTRAINT "UQ_5991d002273b0da26fc6780f1a3" UNIQUE ("name"), CONSTRAINT "PK_1d16658da51504a1630254eecfa" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "qr" ADD CONSTRAINT "FK_b3c38c7fa6d97d101ac61de088e" FOREIGN KEY ("phoneId") REFERENCES "phone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "qr" ADD CONSTRAINT "FK_19d3449789749d20ec36ee222e8" FOREIGN KEY ("checkoutId") REFERENCES "checkout"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "qr" ADD CONSTRAINT "FK_39cb48bbb591602692af1c7f26a" FOREIGN KEY ("drawId") REFERENCES "draw"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "password" ADD CONSTRAINT "FK_fd2ce7dfa8f1ec9eb812c0ceb36" FOREIGN KEY ("phoneId") REFERENCES "phone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "content_img" ADD CONSTRAINT "FK_ca4aeff348fb1af2ae660de2117" FOREIGN KEY ("fieldId") REFERENCES "content_img_field"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "content_md" ADD CONSTRAINT "FK_9b50bc878ac9d5c4f13fed424d7" FOREIGN KEY ("fieldId") REFERENCES "content_md_field"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "content_md_field" ADD CONSTRAINT "FK_cbfdbce6d959445498388dbb5ad" FOREIGN KEY ("screenId") REFERENCES "content_screen"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "content_text" ADD CONSTRAINT "FK_fa53f8b4c52f25ddc35351c5cd6" FOREIGN KEY ("fieldId") REFERENCES "content_text_field"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "content_text_field" ADD CONSTRAINT "FK_e811c8b461d726c11f2f33238e6" FOREIGN KEY ("screenId") REFERENCES "content_screen"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "content_img_field" ADD CONSTRAINT "FK_6f0834e053fa143b140da247e75" FOREIGN KEY ("screenId") REFERENCES "content_screen"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_img_field" DROP CONSTRAINT "FK_6f0834e053fa143b140da247e75"`, undefined);
        await queryRunner.query(`ALTER TABLE "content_text_field" DROP CONSTRAINT "FK_e811c8b461d726c11f2f33238e6"`, undefined);
        await queryRunner.query(`ALTER TABLE "content_text" DROP CONSTRAINT "FK_fa53f8b4c52f25ddc35351c5cd6"`, undefined);
        await queryRunner.query(`ALTER TABLE "content_md_field" DROP CONSTRAINT "FK_cbfdbce6d959445498388dbb5ad"`, undefined);
        await queryRunner.query(`ALTER TABLE "content_md" DROP CONSTRAINT "FK_9b50bc878ac9d5c4f13fed424d7"`, undefined);
        await queryRunner.query(`ALTER TABLE "content_img" DROP CONSTRAINT "FK_ca4aeff348fb1af2ae660de2117"`, undefined);
        await queryRunner.query(`ALTER TABLE "password" DROP CONSTRAINT "FK_fd2ce7dfa8f1ec9eb812c0ceb36"`, undefined);
        await queryRunner.query(`ALTER TABLE "qr" DROP CONSTRAINT "FK_39cb48bbb591602692af1c7f26a"`, undefined);
        await queryRunner.query(`ALTER TABLE "qr" DROP CONSTRAINT "FK_19d3449789749d20ec36ee222e8"`, undefined);
        await queryRunner.query(`ALTER TABLE "qr" DROP CONSTRAINT "FK_b3c38c7fa6d97d101ac61de088e"`, undefined);
        await queryRunner.query(`DROP TABLE "content_img_field"`, undefined);
        await queryRunner.query(`DROP TABLE "content_screen"`, undefined);
        await queryRunner.query(`DROP TABLE "content_text_field"`, undefined);
        await queryRunner.query(`DROP TABLE "content_text"`, undefined);
        await queryRunner.query(`DROP TABLE "content_md_field"`, undefined);
        await queryRunner.query(`DROP TABLE "content_md"`, undefined);
        await queryRunner.query(`DROP TABLE "content_img"`, undefined);
        await queryRunner.query(`DROP TABLE "password"`, undefined);
        await queryRunner.query(`DROP TABLE "phone"`, undefined);
        await queryRunner.query(`DROP TABLE "qr"`, undefined);
        await queryRunner.query(`DROP TABLE "draw"`, undefined);
        await queryRunner.query(`DROP TABLE "checkout"`, undefined);
    }

}
