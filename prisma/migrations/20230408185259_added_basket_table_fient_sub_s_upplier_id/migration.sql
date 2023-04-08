/*
  Warnings:

  - Added the required column `subSupplierId` to the `Basket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "base"."Basket" ADD COLUMN     "subSupplierId" INTEGER NOT NULL;
