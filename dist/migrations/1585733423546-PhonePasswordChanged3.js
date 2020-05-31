"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhonePasswordChanged31585733423546 {
    constructor() {
        this.name = 'PhonePasswordChanged31585733423546';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` text NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(20) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` text NOT NULL", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(20) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` text NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `password` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD `password` varchar(20) NOT NULL", undefined);
    }
}
exports.PhonePasswordChanged31585733423546 = PhonePasswordChanged31585733423546;
//# sourceMappingURL=1585733423546-PhonePasswordChanged3.js.map