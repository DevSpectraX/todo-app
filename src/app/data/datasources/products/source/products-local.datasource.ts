import { Observable } from 'rxjs';
import { ProductsDbo } from '../local/dbo/products.dbo';

export abstract class ProductsLocalDataSource {
  abstract getProducts(limit: number, skip: number): Observable<ProductsDbo | null>;
  abstract saveProducts(products: ProductsDbo): void;
}
