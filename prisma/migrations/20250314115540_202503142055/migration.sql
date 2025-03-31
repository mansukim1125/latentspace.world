/*
  Warnings:

  - You are about to drop the column `companyOrder` on the `Config` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "configId" TEXT;

-- AlterTable
ALTER TABLE "Config" DROP COLUMN "companyOrder";

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_configId_fkey" FOREIGN KEY ("configId") REFERENCES "Config"("id") ON DELETE SET NULL ON UPDATE CASCADE;
