import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserTable1773910854643 implements MigrationInterface {
    name = 'UpdateUserTable1773910854643'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`address\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`dateOfBirth\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`dateOfBirth\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phoneNumber\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phoneNumber\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`gender\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`gender\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`gender\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`gender\` tinyint NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phoneNumber\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phoneNumber\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`dateOfBirth\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`dateOfBirth\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`address\``);
    }

}
