"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhonePasswordChanged1585729020719 {
    constructor() {
        this.name = 'PhonePasswordChanged1585729020719';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(20) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(255) NOT NULL", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(20) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(20) NOT NULL", undefined);
    }
}
exports.PhonePasswordChanged1585729020719 = PhonePasswordChanged1585729020719;
//# sourceMappingURL=1585729020719-PhonePasswordChanged.js.map