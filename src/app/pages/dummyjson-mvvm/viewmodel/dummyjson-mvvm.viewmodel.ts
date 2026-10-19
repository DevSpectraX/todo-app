import { inject, Injectable } from '@angular/core';
import { DummyJsonService } from '../../../core/services/dummyjson.service';
import { DummyjsonMvvmState } from './dummyjson-mvvm.state';
import { GetProductsUseCase } from '../../../domain/usecases/products/get-products.usecase';
import { ProductsEntity } from '../../../domain/entities/products/product.entity';

@Injectable()
export class DummyjsonViewModel {
  readonly dummyjsonState = new DummyjsonMvvmState();
  protected readonly dummyjson = inject(DummyJsonService);
  protected readonly getProductsUseCase = inject(GetProductsUseCase);

  init(): void {
    this.dummyjson.getProductsList();
    this.getProductsUseCase.execute({}).subscribe({
      next: (data: ProductsEntity) => {
        console.log(data);
      },
      error: (error: unknown) => {
        console.log(error);
      },
    });
  }
}
