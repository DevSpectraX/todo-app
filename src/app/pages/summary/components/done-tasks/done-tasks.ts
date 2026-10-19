import { Component, input } from '@angular/core';
import { Todo } from '../../../../core/interface/to-do.interface';

@Component({
  imports: [],
  selector: 'app-done-tasks',
  styleUrl: './done-tasks.css',
  templateUrl: './done-tasks.html',
})
export class DoneTasks {
  readonly todo = input.required<Todo[]>();
}
