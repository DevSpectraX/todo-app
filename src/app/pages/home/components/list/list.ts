import { Component, input, output } from '@angular/core';
import { Todo } from '../../../../core/interface/to-do.interface';
import { SecureDeleteDirective } from '../../../../core/directives/secureDelete.directive';
import { ShortedTitle } from '../../../../core/pipes/shortTitle.pipes';

@Component({
  imports: [SecureDeleteDirective, ShortedTitle],
  selector: 'app-list',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class List {
  readonly todo = input.required<Todo[]>();
  readonly toggled = output<number>();
  readonly deleteID = output<number>();
  readonly editTask = output<number>();
}
