import { inject, Injectable } from '@angular/core';
import { DummyJsonService } from '../../../core/services/dummyjson.service';
import { DummyjsonMvvmState } from './dummyjson-mvvm.state';
import { GetProductsUseCase } from '../../../domain/usecases/products/get-products.usecase';
import { ProductsEntity } from '../../../domain/entities/products/product.entity';
import { delay, skip } from 'rxjs';
import { values } from 'idb-keyval';

@Injectable()
export class DummyjsonViewModel {
  readonly dummyjsonState = new DummyjsonMvvmState();
  protected readonly dummyjson = inject(DummyJsonService);
  protected readonly getProductsUseCase = inject(GetProductsUseCase);

  init(): void {
    //Inicializamos los estados

    this.dummyjsonState.isLoading.set(true);
    this.dummyjsonState.error.set(null);

    this.getProductsUseCase.execute({ limit: this.dummyjsonState.limit, skip: 0 }).subscribe({
      next: (data: ProductsEntity) => {
        this.dummyjsonState.products.set(data.products);
        this.dummyjsonState.skip.update((value) => value + this.dummyjsonState.limit);
        this.dummyjsonState.total.set(data.total);

        //Cambiamos isLoading a false
        this.dummyjsonState.isLoading.set(false);
      },
      error: (error) => {
        this.dummyjsonState.error.set(error.message);
        this.dummyjsonState.isLoading.set(false);
      },
    });
  }

  loadMore() {
    this.dummyjsonState.isLoading.set(true);
    this.dummyjsonState.error.set(null);

    this.getProductsUseCase
      .execute({
        limit: this.dummyjsonState.limit,
        skip: this.dummyjsonState.skip(),
      })

      .subscribe({
        next: (data: ProductsEntity) => {
          this.dummyjsonState.products.set([...this.dummyjsonState.products(), ...data.products]);
          this.dummyjsonState.skip.update((value) => value + this.dummyjsonState.limit);
          this.dummyjsonState.total.set(data.total);

          console.log(this.dummyjsonState.skip());

          console.log(data.total);

          this.dummyjsonState.isLoading.set(false);
        },
        error: (error) => {
          this.dummyjsonState.error.set(error.message);
          this.dummyjsonState.isLoading.set(false);
        },
      });
  }
}
