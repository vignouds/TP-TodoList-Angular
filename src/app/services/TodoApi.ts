import { Todo } from "../classes/Todo";

export default class TodoApi {

    private _todos: Array<Todo>;
    fetchTodos(): Promise<Array<Todo>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this._todos)
            }, 2000);
        });
    }

    addTodo(todo: Todo) {
        this._todos.push(todo)
    }

    removeTodo(todoDel: Todo) {
        this._todos = this._todos.filter((todo) => todoDel != todo);
    }
}