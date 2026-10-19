import { Component, inject } from '@angular/core';
import { DoneTasks } from './components/done-tasks/done-tasks';
import { PendingTasks } from './components/pending-tasks/pending-tasks';
import { TodoService } from '../../core/services/todo.service';
import { Router } from '@angular/router';

@Component({
  imports: [PendingTasks, DoneTasks],
  selector: 'app-summary',
  styleUrl: './summary.css',
  templateUrl: './summary.html',
})
export class Summary {
  private readonly router = inject(Router);
  protected readonly todoService = inject(TodoService);

  goToHome() {
    this.router.navigate(['/home']);
  }

  deleteTasksCompleted() {
    this.todoService.deleteTasksCompleted();
  }
}
