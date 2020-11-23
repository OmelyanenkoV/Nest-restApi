import { GameProductsController } from "./game-products.controller";
import { ProductsService } from "./game-products.service";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Product, ProductSchema } from "./schemas/game-product.schema";

@Module({
  providers: [ProductsService],
  controllers: [GameProductsController],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
})
export class GameProductsModule {}
