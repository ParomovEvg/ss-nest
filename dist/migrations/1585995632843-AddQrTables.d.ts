import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddQrTables1585995632843 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
