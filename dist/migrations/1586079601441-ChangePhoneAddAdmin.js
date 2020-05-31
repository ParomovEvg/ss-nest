"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChangePhoneAddAdmin1586079601441 {
    constructor() {
        this.name = 'ChangePhoneAddAdmin1586079601441';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `phone` ADD `isAdmin` tinyint NOT NULL DEFAULT 0", undefined);
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
        await queryRunner.query("ALTER TABLE `phone` DROP COLUMN `isAdmin`", undefined);
    }
}
exports.ChangePhoneAddAdmin1586079601441 = ChangePhoneAddAdmin1586079601441;
//# sourceMappingURL=1586079601441-ChangePhoneAddAdmin.js.map