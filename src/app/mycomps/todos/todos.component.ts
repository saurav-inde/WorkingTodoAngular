import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Event } from '@angular/router';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  imports: [NgFor, NgIf, TodoItemComponent, AddTodoComponent]
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  localItem: string | null;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    // console.log(this.localItem);
    if (this.localItem === null) {
      this.todos = []
      // console.log("nullllllllll found")
    }
    else {
      console.log("nottttttttttttttt nul")
      this.todos = JSON.parse(this.localItem);
      console.log((this.todos))
    }
 
  }

  ngOnInit(): void {

  }
  deleteTodo(todo: Todo): void {
    console.log('deleteTodo');
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));


  }
  addTodo(todo: any): void {
    console.log('addTodo');
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
