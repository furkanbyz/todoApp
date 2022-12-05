import { TodoItem } from "./todoItem";

export class Model {
    name: string;
    items: TodoItem[];

    constructor() {
        this.name = "Sadık";
        this.items = [
            { description: "kahvaltı", action: "yes" },
            { description: "spor", action: "no" },
            { description: "alışveriş", action: "yes" },
        ]
    }
}