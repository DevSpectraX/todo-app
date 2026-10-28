import { inject, Injectable } from '@angular/core';
import { DummyJsonService } from '../../../core/services/dummyjson.service';
import { DummyjsonMvvmState } from './dummyjson-mvvm.state';
import { GetProductsUseCase } from '../../../domain/usecases/products/get-products.usecase';
import { ProductsEntity } from '../../../domain/entities/products/product.entity';
import { delay } from 'rxjs';

@Injectable()
export class DummyjsonViewModel {
  readonly dummyjsonState = new DummyjsonMvvmState();
  protected readonly dummyjson = inject(DummyJsonService);
  protected readonly getProductsUseCase = inject(GetProductsUseCase);

  init(): void {
    //Inicializamos los estados

    this.dummyjsonState.isLoading.set(true);
    this.dummyjsonState.error.set(null);

    this.getProductsUseCase.execute({}).subscribe({
      next: (data: ProductsEntity) => {
        this.dummyjsonState.products.set(data.products);

        //Cambiamos isLoading a false
        this.dummyjsonState.isLoading.set(false);
      },
      error: (error) => {
        this.dummyjsonState.error.set(error.message);
        this.dummyjsonState.isLoading.set(false);
      },
    });
  }
}
