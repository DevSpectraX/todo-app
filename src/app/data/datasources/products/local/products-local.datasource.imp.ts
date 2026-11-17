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

  override getProducts(limit: number, skip: number): Observable<ProductsDbo | null> {
    const key = this.pageKey(limit, skip);
    const dataProducts = this.storage.getItem<ProductsDbo>(key);

    if (
      !dataProducts ||
      !Array.isArray(dataProducts.products) ||
      dataProducts.limit !== limit ||
      dataProducts.skip !== skip ||
      isExpired(dataProducts.cachedAt, PRODUCTS_CACHE_TTL_MS)
    ) {
      if (dataProducts) {
        this.storage.removeItem(key);
      }
      return of(null);
    }

    return of(dataProducts);
  }

  override saveProducts(products: ProductsDbo): void {
    this.storage.setItem(this.pageKey(products.limit, products.skip), products);
    console.log('Se ha guardado en cached');
  }

  private pageKey(limit: number, skip: number): string {
    return `${KEY}:${limit}:${skip}`;
  }
}
