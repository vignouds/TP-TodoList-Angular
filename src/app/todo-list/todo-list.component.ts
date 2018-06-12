import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { Todo } from '../classes/Todo';
import TodoServices from '../services/TodoServices';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [
    TodoServices,
  ]
})
export class TodoListComponent implements OnInit {
  private _todos: Observable<Array<Todo>>;
  constructor(private todoServices: TodoServices) { }

  public get todos(): Observable<Array<Todo>> {
    return this._todos;
  }

  public set todos(value: Observable<Array<Todo>>) {
    this._todos = value;
  }

  ngOnInit() {
    this._todos =  this.todoServices.getTodosFromServer();
  }
}
