import {MigrationInterface, QueryRunner} from "typeorm";

export class AddQrTables1585995632843 implements MigrationInterface {
    name = 'AddQrTables1585995632843'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `checkout` (`id` int NOT NULL AUTO_INCREMENT, `fn` varchar(16) NOT NULL, `adress` text NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `draw` (`id` int NOT NULL AUTO_INCREMENT, `start` timestamp NOT NULL, `end` timestamp NOT NULL, `description` text NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `qr` (`id` int NOT NULL AUTO_INCREMENT, `fp` varchar(10) NOT NULL, `fd` varchar(10) NOT NULL, `s` bigint NOT NULL, `time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `phoneId` int NULL, `checkoutId` int NULL, `drawId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(20) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` text NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `qr` ADD CONSTRAINT `FK_b3c38c7fa6d97d101ac61de088e` FOREIGN KEY (`phoneId`) REFERENCES `phone`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `qr` ADD CONSTRAINT `FK_19d3449789749d20ec36ee222e8` FOREIGN KEY (`checkoutId`) REFERENCES `checkout`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `qr` ADD CONSTRAINT `FK_39cb48bbb591602692af1c7f26a` FOREIGN KEY (`drawId`) REFERENCES `draw`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `qr` DROP FOREIGN KEY `FK_39cb48bbb591602692af1c7f26a`", undefined);
        await queryRunner.query("ALTER TABLE `qr` DROP FOREIGN KEY `FK_19d3449789749d20ec36ee222e8`", undefined);
        await queryRunner.query("ALTER TABLE `qr` DROP FOREIGN KEY `FK_b3c38c7fa6d97d101ac61de088e`", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(20) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` text NOT NULL", undefined);
        await queryRunner.query("DROP TABLE `qr`", undefined);
        await queryRunner.query("DROP TABLE `draw`", undefined);
        await queryRunner.query("DROP TABLE `checkout`", undefined);
    }

}
