"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMigration1752121941135 = void 0;
class CreateMigration1752121941135 {
    name = 'CreateMigration1752121941135';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` enum ('ADMIN', 'USER') NOT NULL DEFAULT 'USER'`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`refresh_token\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`refresh_token\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD \`status\` enum ('OPEN', 'IN_PROGRESS', 'DONE') NOT NULL DEFAULT 'OPEN'`);
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP COLUMN \`file\``);
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD \`file\` varchar(255) NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP COLUMN \`file\``);
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD \`file\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tasks\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`tasks\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`refresh_token\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`refresh_token\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }
}
exports.CreateMigration1752121941135 = CreateMigration1752121941135;
//# sourceMappingURL=1752121941135-create_migration.js.map