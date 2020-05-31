import { MigrationInterface, QueryRunner } from "typeorm";
export declare class PhonePasswordChanged21585731559319 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
