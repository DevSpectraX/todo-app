import { Component, input } from '@angular/core';
import { DummyjsonProductInterface } from '../../../../core/interface/dummyjson-product.interface';

@Component({
  imports: [],
  selector: 'app-dummyjson-card-mvvm',
  styleUrl: './dummyjson-card.css',
  templateUrl: './dummyjson-card.html',
})
export class DummyjsonCardMvvm {
  readonly card = input.required<DummyjsonProductInterface>()
}
