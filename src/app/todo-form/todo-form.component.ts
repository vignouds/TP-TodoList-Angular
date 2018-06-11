import { Component, OnInit } from '@angular/core';
import { Todo } from '../classes/Todo';
import TodoServices from '../services/TodoServices';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  providers: [
    TodoServices
  ]
})
export class TodoFormComponent implements OnInit {
  todo: Todo = new Todo("", false);

  constructor(private todoService: TodoServices) { }

  handleClick() {
    this.todoService.addTodo(this.todo);
  }

  ngOnInit() {
  }

}
