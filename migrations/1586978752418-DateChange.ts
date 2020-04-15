import {MigrationInterface, QueryRunner} from "typeorm";

export class DateChange1586978752418 implements MigrationInterface {
    name = 'DateChange1586978752418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `start`", undefined);
        await queryRunner.query("ALTER TABLE `draw` ADD `start` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `end`", undefined);
        await queryRunner.query("ALTER TABLE `draw` ADD `end` datetime NULL DEFAULT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `end`", undefined);
        await queryRunner.query("ALTER TABLE `draw` ADD `end` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'", undefined);
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `start`", undefined);
        await queryRunner.query("ALTER TABLE `draw` ADD `start` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP", undefined);
    }

}
