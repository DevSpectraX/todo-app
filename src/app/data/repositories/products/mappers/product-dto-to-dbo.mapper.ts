import { Injectable } from '@angular/core';
import { Mapper } from '../../../../core/interface/mapper';
import { ProductDto } from '../../../datasources/products/remote/dto/product.dto';
import { ProductDbo } from '../../../datasources/products/local/dbo/product.dbo';
import { ProductsDbo } from '../../../datasources/products/local/dbo/products.dbo';
import { ProductsDto } from '../../../datasources/products/remote/dto/products.dto';

@Injectable()
export class ProductDtoToDboMapper extends Mapper<ProductDto, ProductDbo> {
  mapFrom(dto: ProductDto): ProductDbo {
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

  mapTo(dbo: ProductDbo): ProductDto {
    return dbo as ProductDto;
  }

  mapListFrom(dto: ProductsDto): ProductsDbo {
    return {
      products: dto.products.map((product) => {
       //console.log(product)
        return this.mapFrom(product);
      }),
      total: dto.total,
      skip: dto.skip,
      limit: dto.limit,
      cachedAt: Date.now(),
    };
  }
}
