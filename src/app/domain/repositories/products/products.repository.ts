import { Observable } from 'rxjs';
import { ProductsEntity } from '../../entities/products/product.entity';

export abstract class ProductsRepository {
  abstract getProducts(limit: number, skip: number): Observable<ProductsEntity>;
}
