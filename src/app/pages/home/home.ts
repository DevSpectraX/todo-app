import { Component, inject, input, signal } from '@angular/core';
import { Todo } from '../../core/interface/to-do.interface';
import { Router } from '@angular/router';
import { TodoService } from '../../core/services/todo.service';
import { PluralizePipe } from '../../core/pipes/pluralize.pipes';
import { List } from './components/list/list';
import {
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { SecureDeleteDirective } from '../../core/directives/secureDelete.directive';

@Component({
  imports: [
    PluralizePipe,
    List,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    SecureDeleteDirective,
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private readonly router = inject(Router);
  protected readonly todoService = inject(TodoService);

  readonly form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),
  });

  goToForm(): void {
    this.router.navigate(['/new-task']);
  }

  dummy(id: number): void {
    console.log(id);
  }

  deleteTaskID(id: number): void {
    this.todoService.deleteTaskID(id);
  }

  editTask(id: number): void {
    this.router.navigate(['/edit-task', id]);
  }

  goToSummary(): void {
    this.router.navigate(['/summary']);
  }

  checkAll(): void {
    this.todoService.checkAll();
  }

  getList(): Todo[] {
    const titleSearch = this.form.controls.title.value.trim();
    if (titleSearch === '') {
      return this.todoService.todoList();
    }
    return this.todoService.filterByTitle(titleSearch);
  }
  deleteAll() {
    this.todoService.deleteAll();
  }
}
