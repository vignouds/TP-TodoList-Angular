class Todo {
    private _title: string;
    private _isDone: boolean;

    constructor(title: string, isDone: boolean) {
        this._title = title;
        this._isDone = isDone;
    }

    /**
     * Getter title
     * @return {string}
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Getter isDone
     * @return {boolean}
     */
    public get isDone(): boolean {
        return this._isDone;
    }

    /**
     * Setter title
     * @param {string} value
     */
    public set title(value: string) {
        this._title = value;
    }

    /**
     * Setter isDone
     * @param {boolean} value
     */
    public set isDone(value: boolean) {
        this._isDone = value;
    }

}

export { Todo }