import "./style.css";
import { todo } from "./todo";
import { project } from "./project";

const body = document.body;

const container = document.createElement("div");
container.classList.add("container");

const todo1 = new todo("project JS", "Make a todo list", "sometime", 9);

const proj1 = new project("odin");

proj1.addTodo(todo1);

body.appendChild(container);
