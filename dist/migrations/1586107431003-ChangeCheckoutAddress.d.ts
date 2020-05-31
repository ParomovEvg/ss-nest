import { MigrationInterface, QueryRunner } from "typeorm";
export declare class ChangeCheckoutAddress1586107431003 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
