"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostRefactoring1591965885599 {
    constructor() {
        this.name = 'PostRefactoring1591965885599';
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
exports.PostRefactoring1591965885599 = PostRefactoring1591965885599;
//# sourceMappingURL=1591965885599-PostRefactoring.js.map