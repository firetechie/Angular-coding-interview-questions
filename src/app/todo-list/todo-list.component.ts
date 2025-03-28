import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todo: string = '';
  todos: Todo[] = [];

  addTodo() {
    if (this.todo.trim()) {
      this.todos.push({
        id: Date.now(),
        title: this.todo,
        completed: false
      });
      this.todo = '';
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id)
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed
  }
}
