/*
  Warnings:

  - You are about to alter the column `authorName` on the `Config` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(16)`.
  - The primary key for the `Writing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Writing` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(36)`.
  - You are about to alter the column `slug` on the `Writing` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `featured` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Config" ADD COLUMN     "companyOrder" INTEGER[],
ALTER COLUMN "authorName" SET DATA TYPE VARCHAR(16);

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "featured" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Writing" DROP CONSTRAINT "Writing_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "slug" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "Writing_pkey" PRIMARY KEY ("id");
