import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPizza1571297837053 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "pizza" (
        "id" SERIAL NOT NULL,
        "type" character varying NOT NULL,
        "size" integer NOT NULL,
        CONSTRAINT "PK_cb1970bd1d17619fd6bc1ec7414" PRIMARY KEY ("id")
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE "pizza"');
  }

}
