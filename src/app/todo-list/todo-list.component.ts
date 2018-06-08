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
    let todo1: Todo = new Todo("Première tache", true);
    let todo2: Todo = new Todo("Deuxième tache", false);
    let todo3: Todo = new Todo("Troisième tache", false);
    let todo4: Todo = new Todo("Quatrième tache", true);
    let todo5: Todo = new Todo("Cinquième tache", false);

    this._todos = [todo1, todo2, todo3, todo4, todo5]
  }

}
