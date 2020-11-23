import { GameProductsController } from "./game-products.controller";
import { ProductsService } from "./game-products.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [ProductsService],
  controllers: [GameProductsController],
})
export class GameProductsModule {}
