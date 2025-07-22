import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateMigration1752119909931 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
