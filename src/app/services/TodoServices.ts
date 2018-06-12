import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { Todo } from "../classes/Todo";
import TodoApi from "./TodoApi";
import {ApiServiceService} from "./api-service.service";


@Injectable()
export default class TodoServices {

    constructor(private todoApi: TodoApi, private apiServiceService: ApiServiceService) { }

    getTodos(): Promise<Array<Todo>> {
        return this.todoApi.fetchTodos();
    }

    getTodosFromServer():Observable<Array<Todo>>{
      return this.apiServiceService.getTodos();
    }

    addTodo(todo: Todo) {
        //this.todoApi.addTodo(todo);
        this.apiServiceService.addTodo(todo).subscribe();
    }

    removeTodo(todo: Todo) {
        //this.todoApi.removeTodo(todo);
        this.apiServiceService.deleteTodo(todo).subscribe();
    }

    updateTodo(todo: Todo){
        this.apiServiceService.majTodo(todo).subscribe();
    }
}
