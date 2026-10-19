import { inject, Injectable, signal } from '@angular/core';
import {
  DummyjsonProductInterface,
  DummyjsonResponseInterface,
} from '../../../core/interface/dummyjson-product.interface';
import { Observable } from 'rxjs';
import { DummyJsonService } from '../../../core/services/dummyjson.service';

@Injectable()
export class DummyjsonMvvmState {
  dummyjsonService = inject(DummyJsonService);
  readonly productList$: Observable<DummyjsonProductInterface[]> =
    this.dummyjsonService.getProductsList();
}
