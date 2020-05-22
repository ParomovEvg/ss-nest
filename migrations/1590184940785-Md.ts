import {MigrationInterface, QueryRunner} from "typeorm";

export class Md1590184940785 implements MigrationInterface {
    name = 'Md1590184940785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL DEFAULT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL", undefined);
    }

}
