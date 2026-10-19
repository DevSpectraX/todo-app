import { Component, inject, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Todo } from '../../core/interface/to-do.interface';
import { TodoService } from '../../core/services/todo.service';
import { AutofocusDirective } from '../../core/directives/autofocus.directive';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, AutofocusDirective],
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form implements OnInit {
  protected readonly todoService = inject(TodoService);
  private readonly router = inject(Router);
  readonly id = input<string>();

  readonly form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  ngOnInit(): void {
    console.log(this.id());
  }

  getFunction(): void {
    if (this.id() !== null && this.id() !== undefined && this.id() !== '') {
      this.editTask();
    } else {
      this.addToDo();
    }
  }

  addToDo(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.todoService.addTask(this.form.controls.title.value);
  }

  editTask(): void {
    const editedTask = this.todoService.editTask(Number(this.id()), this.form.controls.title.value);
    console.log(editedTask);

    this.router.navigate(['/home']);
  }
}
