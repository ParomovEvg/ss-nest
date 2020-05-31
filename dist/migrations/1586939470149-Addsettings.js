"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Addsettings1586939470149 {
    constructor() {
        this.name = 'Addsettings1586939470149';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `draw` ADD `qrLimit` bigint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` ADD `qrLimitPeriodMS` bigint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` timestamp NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` timestamp NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` timestamp NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` timestamp NOT NULL", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `end` `end` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'", undefined);
        await queryRunner.query("ALTER TABLE `draw` CHANGE `start` `start` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP", undefined);
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `qrLimitPeriodMS`", undefined);
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `qrLimit`", undefined);
    }
}
exports.Addsettings1586939470149 = Addsettings1586939470149;
//# sourceMappingURL=1586939470149-Addsettings.js.map