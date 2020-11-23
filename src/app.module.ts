import { ProductsService } from "./game-products/game-products.service";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GameProductsController } from "./game-products/game-products.controller";

@Module({
  imports: [],
  controllers: [AppController, GameProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
