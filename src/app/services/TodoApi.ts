import { Todo } from "../classes/Todo";

export default class TodoApi {

    private _todos: Array<Todo> = [];
    fetchTodos(): Promise<Array<Todo>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this._todos)
            }, 1);
        });
    }

    addTodo(todo: Todo) {
        this._todos = [...this._todos, todo];
    }

    removeTodo(todoDel: Todo) {
        this._todos.splice(this._todos.indexOf(todoDel), 1);
    }
}