-- CreateIndex
CREATE INDEX "user_subSupplier_product_index" ON "base"."Basket"("userId", "subSupplierId", "productId");
