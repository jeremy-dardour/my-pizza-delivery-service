import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCustomerAndOrder1571300919774 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TYPE "order_delivery-status_enum" AS ENUM('InPreparation', 'OutForDelivery', 'Delivered', 'Cancelled')`,
    );
    await queryRunner.query(
      `CREATE TABLE "order" (
        "id" SERIAL NOT NULL,
        "delivery-status" "order_delivery-status_enum" NOT NULL,
        "customerId" integer,
        CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "customer" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        "address" character varying NOT NULL,
        CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      'ALTER TABLE "pizza" ADD "orderId" integer',
    );
    await queryRunner.query(
      'ALTER TABLE "pizza" ADD CONSTRAINT "FK_a6ed27e50518a538dc9319d7848" FOREIGN KEY ("orderId") REFERENCES "order"("id")',
    );
    await queryRunner.query(
      `ALTER TABLE "order"
      ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "customer"("id")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE "order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"',
    );
    await queryRunner.query(
      'ALTER TABLE "pizza" DROP CONSTRAINT "FK_a6ed27e50518a538dc9319d7848"',
    );
    await queryRunner.query(
      'ALTER TABLE "pizza" DROP COLUMN "orderId"',
    );
    await queryRunner.query(
      'DROP TABLE "customer"',
    );
    await queryRunner.query(
      'DROP TABLE "order"',
    );
    await queryRunner.query(
      'DROP TYPE "order_delivery-status_enum"',
    );
  }

}
