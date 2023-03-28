/*
  Warnings:

  - Added the required column `avaliablee` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "base"."Product" ADD COLUMN     "available" INTEGER NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
