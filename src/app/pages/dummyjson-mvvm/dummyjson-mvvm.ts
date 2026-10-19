import { Component, inject } from '@angular/core';
import { DummyjsonViewModel } from './viewmodel/dummyjson-mvvm.viewmodel';
import { DummyjsonCardMvvm } from './component/dummyjson-card/dummyjson-card';
import { AsyncPipe } from '@angular/common';
import { DummyjsonMvvmState } from './viewmodel/dummyjson-mvvm.state';

@Component({
  imports: [DummyjsonCardMvvm, AsyncPipe],
  providers: [DummyjsonViewModel],
  selector: 'app-dummyjson-mvvm',
  styleUrl: './dummyjson-mvvm.css',
  templateUrl: './dummyjson-mvvm.html',
})
export class DummyjsonMvvm {
  protected readonly dummyjsonVM = inject(DummyjsonViewModel)

 ngOnInit():void {
  this.dummyjsonVM.init();
 }

}
