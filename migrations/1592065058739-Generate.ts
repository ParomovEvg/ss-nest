import {MigrationInterface, QueryRunner} from "typeorm";

export class Generate1592065058739 implements MigrationInterface {
    name = 'Generate1592065058739'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
    }

}
