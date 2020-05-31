"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImgNew1589841743387 {
    constructor() {
        this.name = 'ImgNew1589841743387';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `content_img` ADD `path` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `content_img` ADD `host` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL DEFAULT NULL", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` datetime NULL", undefined);
        await queryRunner.query("ALTER TABLE `content_img` DROP COLUMN `host`", undefined);
        await queryRunner.query("ALTER TABLE `content_img` DROP COLUMN `path`", undefined);
    }
}
exports.ImgNew1589841743387 = ImgNew1589841743387;
//# sourceMappingURL=1589841743387-ImgNew.js.map