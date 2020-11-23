import { GameProductsModule } from "./game-products/game-products.module";

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [GameProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
