import { Observable } from 'rxjs';
import { ProductsDto } from '../remote/dto/products.dto';

export abstract class ProductsRemoteDataSource {
  abstract getProducts(): Observable<ProductsDto>;
}
