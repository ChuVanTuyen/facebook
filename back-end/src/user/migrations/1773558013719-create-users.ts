import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1773558013719 implements MigrationInterface {
    name = 'CreateUsers1773558013719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(100) NOT NULL, \`lastName\` varchar(100) NOT NULL, \`email\` varchar(255) NOT NULL, \`dateOfBirth\` date NULL, \`phoneNumber\` varchar(20) NULL, \`gender\` varchar(255) NULL, \`password\` varchar(255) NOT NULL, \`address\` varchar(255) NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`isActive\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
