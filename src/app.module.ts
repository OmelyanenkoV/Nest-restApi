import { GameProductsModule } from "./game-products/game-products.module";

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { URI } from "./game-products//dbConfig/db.uri";

@Module({
  imports: [GameProductsModule, MongooseModule.forRoot(URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
