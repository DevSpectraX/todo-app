import { inject, Injectable } from '@angular/core';
import { ProductsLocalDataSource } from '../source/products-local.datasource';
import { ProductsDbo } from './dbo/products.dbo';
import { from, map, Observable, of } from 'rxjs';
import { LocalStoragePort } from '../../../../core/ports/storage.ports';
import {
  KEY,
  PRODUCTS_CACHE_TTL_MS,
} from '../../../../core/config/constants/dboDummyjson.constants';
import { isExpired } from '../../../../core/utils/dummyjson.utils';

@Injectable({ providedIn: 'root' })
export class ProductsLocalDataSourceImp extends ProductsLocalDataSource {
  private readonly storage = inject(LocalStoragePort);

  override getProducts(): Observable<ProductsDbo | null> {
    const dataProducts = this.storage.getItem<ProductsDbo>(KEY);

    if (
      !dataProducts ||
      !Array.isArray(dataProducts.products) ||
      isExpired(dataProducts.cachedAt, PRODUCTS_CACHE_TTL_MS)
    ) {
      if (dataProducts) {
        this.storage.removeItem(KEY);
      }
      return of(null);
    }

    return of(dataProducts);
  }

  override saveProducts(products: ProductsDbo): void {
    this.storage.setItem(KEY, products);
    console.log('Se ha guardado en cached');
  }
}
