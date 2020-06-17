"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Generate1592065058739 {
    constructor() {
        this.name = 'Generate1592065058739';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "start" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "end" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "start" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "end" SET DEFAULT null`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "end" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "start" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "end" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "draw" ALTER COLUMN "start" DROP DEFAULT`, undefined);
    }
}
exports.Generate1592065058739 = Generate1592065058739;
//# sourceMappingURL=1592065058739-Generate.js.map