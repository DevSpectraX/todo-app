import { Observable } from 'rxjs';
import { ProductsDbo } from '../local/dbo/products.dbo';

export abstract class ProductsLocalDataSource {
  abstract getProducts(): Observable<ProductsDbo> | null;
}
