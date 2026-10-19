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

  override getProducts(): Observable<ProductsDbo > {
    const dataProducts = this.storage.getItem(KEY);

    //Con return from Promesa a Observable
    return from(this.storage.getItem(KEY)).pipe(
      map((cached) => {
        if (!cached) {
          return null;
        }
        return cached;
      }),
    );

    /* if (!dataProducts) {
      return null;
    }
    try {
      const cachedData: ProductsDbo = JSON.parse(dataProducts);

      if (isExpired(cachedData.cachedAt, PRODUCTS_CACHE_TTL_MS)) {
        this.storage.removeItem(KEY);
        return null;
      }
      //Con return of lo convierto a Observable
      return of(cachedData);
    } catch (error) {
      console.log(error);
      this.storage.removeItem(KEY);
      return null;
    } */
  }

  saveProducts(products: ProductsDbo): void {
    const productData = JSON.stringify(products);
    this.storage.setItem(KEY, productData);
  }
}
