import { Injectable } from "@angular/core";
import { ProductEntity, ProductsEntity } from "../../../../domain/entities/products/product.entity";
import { ProductDto } from "../../../datasources/products/remote/dto/product.dto";
import { ProductsDto } from "../../../datasources/products/remote/dto/products.dto";
import { Mapper } from "../../../../core/interface/mapper";

@Injectable()
export class ProductDtoToEntityMapper extends Mapper<ProductDto, ProductEntity> {
  mapFrom(dto: ProductDto): ProductEntity {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      price: dto.price,
      discountPercentage: dto.discountPercentage,
      rating: dto.rating,
      stock: dto.stock,
      // Some products (groceries) come without a brand.
      brand: dto.brand ?? '',
      category: dto.category,
      thumbnail: dto.thumbnail,
      images: dto.images,
      availabilityStatus: dto.availabilityStatus,
      tags: dto.tags ?? [],
    };
  }

  mapTo(entity: ProductEntity): ProductDto {
    return entity as ProductDto;
  }

  mapListFrom(dto: ProductsDto): ProductsEntity {
    return {
      products: dto.products.map((product) => this.mapFrom(product)),
      total: dto.total,
      skip: dto.skip,
      limit: dto.limit,
    };
  }
}