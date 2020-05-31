"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhonePasswordChanged21585731559319 {
    constructor() {
        this.name = 'PhonePasswordChanged21585731559319';
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
exports.PhonePasswordChanged21585731559319 = PhonePasswordChanged21585731559319;
//# sourceMappingURL=1585731559319-PhonePasswordChanged2.js.map