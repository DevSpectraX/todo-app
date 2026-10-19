import { Component, inject } from '@angular/core';
import { DummyjsonCard } from './component/dummyjson-card/dummyjson-card';
import { DummyJsonService } from '../../core/services/dummyjson.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { DummyjsonProductInterface } from '../../core/interface/dummyjson-product.interface';

@Component({
  imports: [DummyjsonCard, AsyncPipe],
  selector: 'app-dummyjson',
  styleUrl: './dummyjson.css',
  templateUrl: './dummyjson.html',
})
export class Dummyjson {
  private readonly dummyJson = inject(DummyJsonService);
  protected productList$: Observable<DummyjsonProductInterface[]> =
    this.dummyJson.getProductsList();
}
