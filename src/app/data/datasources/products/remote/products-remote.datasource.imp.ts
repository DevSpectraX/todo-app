import { inject, Injectable } from '@angular/core';
import { ProductsRemoteDataSource } from '../source/products-remote.datasource';
import { Observable } from 'rxjs';
import { ProductsDto } from './dto/products.dto';
import { API_URL } from '../../../../core/config/constants/dummyjson.constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsRemoteDataSourceImp extends ProductsRemoteDataSource {
  private readonly http = inject(HttpClient);

  override getProducts(): Observable<ProductsDto> {
    return this.http.get<ProductsDto>(`${API_URL}/products`);
  }
}
