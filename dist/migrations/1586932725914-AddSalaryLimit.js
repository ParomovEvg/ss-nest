"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddSalaryLimit1586932725914 {
    constructor() {
        this.name = 'AddSalaryLimit1586932725914';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `draw` ADD `sLimit` bigint NOT NULL", undefined);
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
        await queryRunner.query("ALTER TABLE `draw` DROP COLUMN `sLimit`", undefined);
    }
}
exports.AddSalaryLimit1586932725914 = AddSalaryLimit1586932725914;
//# sourceMappingURL=1586932725914-AddSalaryLimit.js.map