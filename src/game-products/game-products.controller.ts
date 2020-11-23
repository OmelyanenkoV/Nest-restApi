import { ProductsService } from "./game-products.service";
import { UpdateProductDto } from "./dto/update-game-product.dto";
import { CreateProductDto } from "./dto/create-game-product.dto";
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from "@nestjs/common";

@Controller("game-products")
export class GameProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Get()
  getAll() {
    return this.ProductsService.getAll();
  }

  @Get(":id")
  getOne(@Param("id") id: string) {
    return this.ProductsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header("Cache-Control", "none")
  create(@Body() createProductDto: CreateProductDto) {
    return this.ProductsService.create(createProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): string {
    return "Remove" + id;
  }

  @Put(":id")
  update(
    @Param("id") id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): string {
    return "Update" + id;
  }
}
