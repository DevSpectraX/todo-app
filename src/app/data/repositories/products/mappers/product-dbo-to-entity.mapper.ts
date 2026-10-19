import { Injectable } from "@angular/core";
import { ProductEntity, ProductsEntity } from "../../../../domain/entities/products/product.entity";
import { Mapper } from "../../../../core/interface/mapper";
import { ProductDbo } from "../../../datasources/products/local/dbo/product.dbo";
import { ProductsDbo } from "../../../datasources/products/local/dbo/products.dbo";

@Injectable()
export class ProductDboToEntityMapper extends Mapper<ProductDbo, ProductEntity> {
  mapFrom(dbo: ProductDbo): ProductEntity {
    return {
      id: dbo.id,
      title: dbo.title,
      description: dbo.description,
      price: dbo.price,
      discountPercentage: dbo.discountPercentage,
      rating: dbo.rating,
      stock: dbo.stock,
      // Some products (groceries) come without a brand.
      brand: dbo.brand ?? '',
      category: dbo.category,
      thumbnail: dbo.thumbnail,
      images: dbo.images,
      availabilityStatus: dbo.availabilityStatus,
      tags: dbo.tags ?? [],
    };
  }

  mapTo(entity: ProductEntity): ProductDbo {
    return entity as ProductDbo;
  }

  mapListFrom(dbo: ProductsDbo): ProductsEntity {
    return {
      products: dbo.products.map((product) => this.mapFrom(product)),
      total: dbo.total,
      skip: dbo.skip,
      limit: dbo.limit
    };
  }
}