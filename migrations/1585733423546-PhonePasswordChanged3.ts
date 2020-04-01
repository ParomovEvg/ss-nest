import {MigrationInterface, QueryRunner} from "typeorm";

export class PhonePasswordChanged31585733423546 implements MigrationInterface {
    name = 'PhonePasswordChanged31585733423546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` text NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(20) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` text NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(20) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` text NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(20) NOT NULL", undefined);
    }

}
