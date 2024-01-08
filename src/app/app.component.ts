import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./mycomps/todos/todos.component";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [FormsModule,CommonModule, RouterOutlet, TodosComponent ,FormsModule,]
})
export class AppComponent {
  
  title = 'my-app';
  constructor() {
    setTimeout(() => {
      this.title = 'Todo App';
    }, 5000);
  }
}
