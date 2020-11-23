import { CreateProductDto } from "./dto/create-game-product.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }

  getById(id) {
    return this.products.find((e) => e.id === id);
  }

  create(productDto: CreateProductDto) {
    this.products.push({
      ...productDto,
      id: Date.now().toString(),
    });
  }
}
