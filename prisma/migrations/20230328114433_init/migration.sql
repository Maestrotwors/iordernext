/*
  Warnings:

  - You are about to drop the column `avaliablee` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "base"."Product" DROP COLUMN "available",
ADD COLUMN     "available" INTEGER NOT NULL DEFAULT 0;
