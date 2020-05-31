"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Img1589736926914 {
    constructor() {
        this.name = 'Img1589736926914';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `content_img` CHANGE `createDate` `fieldId` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `content_img` DROP COLUMN `fieldId`", undefined);
        await queryRunner.query("ALTER TABLE `content_img` ADD `fieldId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `content_img` ADD CONSTRAINT `FK_ca4aeff348fb1af2ae660de2117` FOREIGN KEY (`fieldId`) REFERENCES `content_img_field`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `content_img` DROP FOREIGN KEY `FK_ca4aeff348fb1af2ae660de2117`", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `content_img` DROP COLUMN `fieldId`", undefined);
        await queryRunner.query("ALTER TABLE `content_img` ADD `fieldId` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `content_img` CHANGE `fieldId` `createDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
    }
}
exports.Img1589736926914 = Img1589736926914;
//# sourceMappingURL=1589736926914-Img.js.map