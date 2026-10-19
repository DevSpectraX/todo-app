import { Component, input } from '@angular/core';
import { DummyjsonProductInterface } from '../../../../core/interface/dummyjson-product.interface';

@Component({
  imports: [],
  selector: 'app-dummyjson-card',
  styleUrl: './dummyjson-card.css',
  templateUrl: './dummyjson-card.html',
})
export class DummyjsonCard {
  readonly card = input.required<DummyjsonProductInterface>()
}
