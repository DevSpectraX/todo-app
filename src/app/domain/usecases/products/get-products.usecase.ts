import { inject, Injectable } from '@angular/core';
import { UseCase } from '../../../core/interface/use-case';
import { ProductsEntity } from '../../entities/products/product.entity';
import { Observable } from 'rxjs';
import { ProductsRepository } from '../../repositories/products/products.repository';

@Injectable()
export class GetProductsUseCase implements UseCase<{}, ProductsEntity> {
  private readonly repository = inject(ProductsRepository);
  execute(params: {}): Observable<ProductsEntity> {
    return this.repository.getProducts();
  }
}
