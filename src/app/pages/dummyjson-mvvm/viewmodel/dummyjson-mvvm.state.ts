import { inject, Injectable, signal } from '@angular/core';
import {
  DummyjsonProductInterface,
  DummyjsonResponseInterface,
} from '../../../core/interface/dummyjson-product.interface';
import { Observable } from 'rxjs';
import { DummyJsonService } from '../../../core/services/dummyjson.service';
import { ProductEntity, ProductsEntity } from '../../../domain/entities/products/product.entity';

@Injectable()
export class DummyjsonMvvmState {
  public readonly products = signal<ProductEntity[]>([]);

  //Necesito 2 estados mas (isLoading, error)

  public readonly isLoading = signal<boolean>(false);
  public readonly error = signal<string | null>(null);
}
