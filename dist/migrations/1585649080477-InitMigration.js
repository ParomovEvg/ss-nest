"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InitMigration1585649080477 {
    constructor() {
        this.name = 'InitMigration1585649080477';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `phone` (`id` int NOT NULL AUTO_INCREMENT, `phone` varchar(11) NOT NULL, `registrationDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `password` (`id` int NOT NULL AUTO_INCREMENT, `password` varchar(20) NOT NULL, `passwordDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `phoneId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `password` ADD CONSTRAINT `FK_fd2ce7dfa8f1ec9eb812c0ceb36` FOREIGN KEY (`phoneId`) REFERENCES `phone`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `password` DROP FOREIGN KEY `FK_fd2ce7dfa8f1ec9eb812c0ceb36`", undefined);
        await queryRunner.query("DROP TABLE `password`", undefined);
        await queryRunner.query("DROP TABLE `phone`", undefined);
    }
}
exports.InitMigration1585649080477 = InitMigration1585649080477;
//# sourceMappingURL=1585649080477-InitMigration.js.map