import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';
// import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title: string = '';
  description: string = '';
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();



  onSubmit() {
    const todo =
    {
      sno: 3,
      title: this.title,
      description: this.description,
      active: true
    }
    this.addTodo.emit(todo);
    console.log(todo);
  }
}
