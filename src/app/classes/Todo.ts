class Todo {
    id: number;
    title: string;
    isDone: boolean;

    constructor(title: string, isDone: boolean) {
        this.title = title;
        this.isDone = isDone;
    }
}

export { Todo }
