"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Md1590184940785 {
    constructor() {
        this.name = 'Md1590184940785';
    }
    async up(queryRunner) {
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
    }
}
exports.Md1590184940785 = Md1590184940785;
//# sourceMappingURL=1590184940785-Md.js.map