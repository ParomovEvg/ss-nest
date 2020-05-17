import {MigrationInterface, QueryRunner} from "typeorm";

export class Content1588698857832 implements MigrationInterface {
    name = 'Content1588698857832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `content_img` (`id` int NOT NULL AUTO_INCREMENT, `url` varchar(255) NOT NULL, `createDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `content_md` (`id` int NOT NULL AUTO_INCREMENT, `value` text NOT NULL, `fieldId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `content_md_field` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `label` text NOT NULL, `screenId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `content_screen` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_ea859d38e413326503bba93bee` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `content_img_field` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `screenId` int NULL, UNIQUE INDEX `IDX_5991d002273b0da26fc6780f1a` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `content_text` (`id` int NOT NULL AUTO_INCREMENT, `value` text NOT NULL, `createDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `fieldId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `content_text_field` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `screenId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `content_md` ADD CONSTRAINT `FK_9b50bc878ac9d5c4f13fed424d7` FOREIGN KEY (`fieldId`) REFERENCES `content_md_field`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `content_md_field` ADD CONSTRAINT `FK_cbfdbce6d959445498388dbb5ad` FOREIGN KEY (`screenId`) REFERENCES `content_screen`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `content_img_field` ADD CONSTRAINT `FK_6f0834e053fa143b140da247e75` FOREIGN KEY (`screenId`) REFERENCES `content_screen`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `content_text` ADD CONSTRAINT `FK_fa53f8b4c52f25ddc35351c5cd6` FOREIGN KEY (`fieldId`) REFERENCES `content_text_field`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `content_text_field` ADD CONSTRAINT `FK_e811c8b461d726c11f2f33238e6` FOREIGN KEY (`screenId`) REFERENCES `content_screen`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `content_text_field` DROP FOREIGN KEY `FK_e811c8b461d726c11f2f33238e6`", undefined);
        await queryRunner.query("ALTER TABLE `content_text` DROP FOREIGN KEY `FK_fa53f8b4c52f25ddc35351c5cd6`", undefined);
        await queryRunner.query("ALTER TABLE `content_img_field` DROP FOREIGN KEY `FK_6f0834e053fa143b140da247e75`", undefined);
        await queryRunner.query("ALTER TABLE `content_md_field` DROP FOREIGN KEY `FK_cbfdbce6d959445498388dbb5ad`", undefined);
        await queryRunner.query("ALTER TABLE `content_md` DROP FOREIGN KEY `FK_9b50bc878ac9d5c4f13fed424d7`", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL", undefined);
        await queryRunner.query("DROP TABLE `content_text_field`", undefined);
        await queryRunner.query("DROP TABLE `content_text`", undefined);
        await queryRunner.query("DROP INDEX `IDX_5991d002273b0da26fc6780f1a` ON `content_img_field`", undefined);
        await queryRunner.query("DROP TABLE `content_img_field`", undefined);
        await queryRunner.query("DROP INDEX `IDX_ea859d38e413326503bba93bee` ON `content_screen`", undefined);
        await queryRunner.query("DROP TABLE `content_screen`", undefined);
        await queryRunner.query("DROP TABLE `content_md_field`", undefined);
        await queryRunner.query("DROP TABLE `content_md`", undefined);
        await queryRunner.query("DROP TABLE `content_img`", undefined);
    }

}
