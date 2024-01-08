import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo: Todo = new Todo();
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  
  onClick() {
    // this.todo.active = !this.todo.active;
    console.log("click has been clicked");
    this.todoDelete.emit(this.todo);
  }
}
