-- CreateTable
CREATE TABLE "public"."Category" (
    "id_category" SERIAL NOT NULL,
    "name_category" TEXT NOT NULL,
    "slug_category" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id_category")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "id_product" SERIAL NOT NULL,
    "name_product" TEXT NOT NULL,
    "price_product" DOUBLE PRECISION NOT NULL,
    "image_product" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id_product")
);

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id_category") ON DELETE RESTRICT ON UPDATE CASCADE;
