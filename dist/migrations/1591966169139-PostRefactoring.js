"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostRefactoring1591966169139 {
    constructor() {
        this.name = 'PostRefactoring1591966169139';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "content_text_field" ADD "description" character varying(255) NOT NULL`, undefined);
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
        await queryRunner.query(`ALTER TABLE "content_text_field" DROP COLUMN "description"`, undefined);
    }
}
exports.PostRefactoring1591966169139 = PostRefactoring1591966169139;
//# sourceMappingURL=1591966169139-PostRefactoring.js.map