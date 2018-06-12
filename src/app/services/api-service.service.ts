import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

import {Todo} from '../classes/Todo';

const API_BASE_URL: string = 'http://localhost:3000/';
const API_TODOS: string = 'todos';

@Injectable()
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getTodos():Observable<Array<Todo>>{
    return <Observable<Array<Todo>>> this.http.get(`${API_BASE_URL}${API_TODOS}`);
  }

  addTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(`${API_BASE_URL}${API_TODOS}`, todo);
  }

  majTodo(todo: Todo){
    return this.http.put<Todo>(`${API_BASE_URL}${API_TODOS}/${todo.id}`, todo);
  }

  deleteTodo(todo: Todo){
    return this.http.delete(`${API_BASE_URL}${API_TODOS}/${todo.id}`);
  }

}
