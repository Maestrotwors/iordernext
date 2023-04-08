/*
  Warnings:

  - A unique constraint covering the columns `[userId,subSupplierId,productId]` on the table `Basket` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "base"."user_subSupplier_product_index";

-- CreateIndex
CREATE UNIQUE INDEX "Basket_userId_subSupplierId_productId_key" ON "base"."Basket"("userId", "subSupplierId", "productId");
