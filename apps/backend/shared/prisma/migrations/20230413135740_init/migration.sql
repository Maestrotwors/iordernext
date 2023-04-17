-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "base";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "product";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "user";

-- CreateTable
CREATE TABLE "base"."Article" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "body" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."User" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Supplier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."SupplierDeliveryPoint" (
    "id" SERIAL NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "deliveryPointId" INTEGER NOT NULL,

    CONSTRAINT "SupplierDeliveryPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "available" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parentId" INTEGER,
    "subSupplierId" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Catalog" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Catalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Basket" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "subSupplierId" INTEGER NOT NULL DEFAULT 1,
    "productId" INTEGER NOT NULL,
    "deliveryPointId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Article_title_key" ON "base"."Article"("title");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "base"."User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "base"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_id_key" ON "base"."Supplier"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_name_key" ON "base"."Supplier"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SupplierDeliveryPoint_id_key" ON "base"."SupplierDeliveryPoint"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "base"."Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_key" ON "base"."Category"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Basket_userId_subSupplierId_productId_key" ON "base"."Basket"("userId", "subSupplierId", "productId");
