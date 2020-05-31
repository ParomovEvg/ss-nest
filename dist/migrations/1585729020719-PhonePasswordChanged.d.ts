import { MigrationInterface, QueryRunner } from "typeorm";
export declare class PhonePasswordChanged1585729020719 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
