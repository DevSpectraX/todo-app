import { Observable } from 'rxjs';
import { ProductsDto } from '../remote/dto/products.dto';

export abstract class ProductsRemoteDataSource {
  abstract getProducts(limit: number, skip: number): Observable<ProductsDto>;
}
