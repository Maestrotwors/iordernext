/*
  Warnings:

  - Added the required column `image` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "base"."Supplier" ADD COLUMN     "image" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "base"."SupplierDeliveryPoint" (
    "id" SERIAL NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "deliveryPointId" INTEGER NOT NULL,

    CONSTRAINT "SupplierDeliveryPoint_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SupplierDeliveryPoint_id_key" ON "base"."SupplierDeliveryPoint"("id");
