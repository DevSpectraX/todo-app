import { Component, input } from '@angular/core';
import { Todo } from '../../../../core/interface/to-do.interface';

@Component({
  imports: [],
  selector: 'app-pending-tasks',
  styleUrl: './pending-tasks.css',
  templateUrl: './pending-tasks.html',
})
export class PendingTasks {
  readonly todo = input.required<Todo[]>();
}
