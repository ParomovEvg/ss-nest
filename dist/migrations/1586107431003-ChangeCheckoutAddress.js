"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChangeCheckoutAddress1586107431003 {
    constructor() {
        this.name = 'ChangeCheckoutAddress1586107431003';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `checkout` CHANGE `adress` `address` text NOT NULL", undefined);
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
        await queryRunner.query("ALTER TABLE `checkout` CHANGE `address` `adress` text NOT NULL", undefined);
    }
}
exports.ChangeCheckoutAddress1586107431003 = ChangeCheckoutAddress1586107431003;
//# sourceMappingURL=1586107431003-ChangeCheckoutAddress.js.map