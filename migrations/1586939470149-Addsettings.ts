import {MigrationInterface, QueryRunner} from "typeorm";

export class Addsettings1586939470149 implements MigrationInterface {
    name = 'Addsettings1586939470149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `draw` ADD `qrLimit` bigint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` ADD `qrLimitPeriodMS` bigint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` timestamp NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` timestamp NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` timestamp NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` timestamp NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP", undefined);
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `qrLimitPeriodMS`", undefined);
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `qrLimit`", undefined);
    }

}
