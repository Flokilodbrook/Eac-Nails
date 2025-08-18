import { categorieService } from "./data/categorieService";
import { categoriesProducts } from "./data/categoriesProduct";
import { products } from "./data/products";
import { PrismaClient } from "../app/generated/prisma";
import { nailStyles } from "./data/nailStayles";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.serviceCategory.createMany({
      data: categorieService,
    });

    await prisma.productCategory.createMany({
      data: categoriesProducts,
    });

    await prisma.nailStyle.createMany({
      data: nailStyles
    });

    await prisma.product.createMany({
      data: products
    });

   
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
