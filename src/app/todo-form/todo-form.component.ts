import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  private _title: string = "";
  private _isDone = false;

  @Output()
  todoAdded: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoServices) { }

  handleClick() {
    //a la valeur des inputs (ils sont bindés)
    let todo = new Todo(this._title, this._isDone);
    this.todoService.addTodo(todo);

    this.todoAdded.emit();
  }

  ngOnInit() {
  }

}
