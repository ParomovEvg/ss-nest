import { MigrationInterface, QueryRunner } from "typeorm";
export declare class ChangePhoneAddAdmin1586079601441 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
