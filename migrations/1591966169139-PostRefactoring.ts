import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1591966169139 implements MigrationInterface {
    name = 'PostRefactoring1591966169139'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_text_field" ADD "description" character varying(255) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "start" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "end" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "start" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "end" SET DEFAULT null`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "end" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "start" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "end" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "start" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "content_text_field" DROP COLUMN "description"`, undefined);
    }

}
