"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DateChange1586978752418 {
    constructor() {
        this.name = 'DateChange1586978752418';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `start`", undefined);
        await queryRunner.query("ALTER TABLE `draw` ADD `start` datetime NULL DEFAULT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `end`", undefined);
        await queryRunner.query("ALTER TABLE `draw` ADD `end` datetime NULL DEFAULT NULL", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `end`", undefined);
        await queryRunner.query("ALTER TABLE `draw` ADD `end` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'", undefined);
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `start`", undefined);
        await queryRunner.query("ALTER TABLE `draw` ADD `start` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP", undefined);
    }
}
exports.DateChange1586978752418 = DateChange1586978752418;
//# sourceMappingURL=1586978752418-DateChange.js.map