/*
  Warnings:

  - You are about to drop the column `configId` on the `Company` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_configId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "configId";

-- AlterTable
ALTER TABLE "Config" ADD COLUMN     "companyOrder" TEXT[];
