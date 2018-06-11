import { Component, OnInit } from '@angular/core';
import { Todo } from '../classes/Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo:Todo = new Todo("", false);

  constructor() { }

  handleClick() {
    console.log('TODO', this.todo);
  }

  ngOnInit() {
  }

}
