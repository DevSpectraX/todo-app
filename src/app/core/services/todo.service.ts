// Service centraliza la lógica y la gestión de datos para compartirlos entre componentes

import { inject, Injectable, signal } from '@angular/core';
import { Todo } from '../interface/to-do.interface';
import { createUniqueID } from '../utils/id.utils';
import { Title } from '@angular/platform-browser';
import { StorageSource } from './storage/source/storage.source';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly storage = inject(StorageSource);
  todoList = signal<Todo[]>([]);

  constructor() {
    this.readLocalStorage();
  }

  async readLocalStorage(): Promise<void> {
    const getListV2: Todo[] = await this.storage.read<Todo[]>('tasks', []);
    this.todoList.set(getListV2);
  }

  //Añadir
  addTask(title: string): void {
    console.log(title);

    console.log(this.todoList());

    const task: Todo = {
      id: createUniqueID(),
      title,
      completed: false,
    };

    this.todoList().push(task);

    this.storage.write('tasks', this.todoList());
  }
  //Modificar
  editTask(id: number, title: string): Todo[] | null {
    let task = this.todoList().find((todo) => todo.id === id) ?? null;
    if (task !== null) {
      this.todoList.update((todos) =>
        todos.map((todo) => (todo.id === id ? { ...todo, title: title } : todo)),
      );
      this.storage.write('tasks', this.todoList());
      //localStorage.setItem('tasks', JSON.stringify(this.todoList()));
    }

    return this.todoList();
  }
  //Borrar
  // Función nueva para borrar todo
  deleteAll(): void {
    //Primero seteo el todolist a array vacio
    this.todoList.set([]);

    //Luego elimino todo el storage
    this.storage.remove('tasks');
  }

  deleteTaskID(id: number) {
    console.log(`Se va a proceder a eliminar la tarea nº${id}`);
    this.todoList.update((todos) => todos.filter((todo) => todo.id !== id));

    this.storage.write('tasks', this.todoList());
    // localStorage.setItem('tasks', JSON.stringify(this.todoList()));
  }

  deleteTasksCompleted(): void {
    this.todoList.update((todos) => todos.filter((todo) => todo.completed === false));

    this.storage.write('tasks', this.todoList());
  }

  //Función para seleccionar todas las tareas
  checkAll(): void {
    this.todoList.update((todos) => todos.map((task) => ({ ...task, completed: true })));

    this.storage.write('tasks', this.todoList());
    //localStorage.setItem('tasks', JSON.stringify(this.todoList()));
  }

  taskCompleted(id: number) {
    console.log(`Se ha completado la tarea ${id}`);

    this.todoList.update((todos) =>
      todos.map((task) =>
        task.id === id ? { id: task.id, title: task.title, completed: !task.completed } : task,
      ),
    );
    this.storage.write('tasks', this.todoList());
    //localStorage.setItem('tasks', JSON.stringify(this.todoList()));
  }

  filterByTitle(title: string): Todo[] {
    const titleLower = title.toLowerCase();

    //Añadir .includes para encontrar tareas que incluyan el titulo
    //Modificar para guardar en una variable aparte los filtros
    let filteredList = this.todoList().filter((tasks) =>
      tasks.title.toLowerCase().includes(titleLower),
    );

    return filteredList;
  }
  //Nuevas variables con los array filtrados
  onlyTasksCompleted(): Todo[] {
    let completedList = this.todoList().filter((task) => task.completed === true);
    return completedList;
  }

  onlyTasksIncompleted(): Todo[] {
    let incompletedList = this.todoList().filter((task) => task.completed === false);
    return incompletedList;
  }
}
