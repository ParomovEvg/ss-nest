import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddSalaryLimit1586932725914 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
