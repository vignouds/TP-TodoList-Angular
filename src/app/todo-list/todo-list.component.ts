import { Component, OnInit } from '@angular/core';
import { Todo } from '../classes/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private _todos: Array<Todo>;
  constructor() { }

  /**
   * Getter todos
   * @return {Array<Todo>}
   */
  public get todos(): Array<Todo> {
    return this._todos;
  }

  /**
   * Setter todos
   * @param {Array<Todo>} value
   */
  public set todos(value: Array<Todo>) {
    this._todos = value;
  }

  ngOnInit() {
    this._todos = [
      new Todo("Première tache", true),
      new Todo("Deuxième tache", false),
      new Todo("Troisième tache", false),
      new Todo("Quatrième tache", true),
      new Todo("Cinquième tache", false),
      null
    ];
  }
}
