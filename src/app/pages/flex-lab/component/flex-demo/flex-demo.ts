import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-flex-demo',
  styleUrl: './flex-demo.css',
  templateUrl: './flex-demo.html',
})
export class FlexDemo {
  readonly code = input.required<string>();
  readonly variant = input.required<string>();
  
}
