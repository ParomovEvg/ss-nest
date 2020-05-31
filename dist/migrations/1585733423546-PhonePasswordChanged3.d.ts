import { MigrationInterface, QueryRunner } from "typeorm";
export declare class PhonePasswordChanged31585733423546 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
