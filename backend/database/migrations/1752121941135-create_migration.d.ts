import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateMigration1752121941135 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
