import "./style.css";
import { todo } from "./todo";
import { project } from "./project";

const body = document.body;

const container = document.createElement("div");
container.classList.add("container");

const todo1 = new todo("project JS", "Make a todo list", "sometime", 9);

const proj1 = new project("odin");

proj1.addTodo(todo1);

let projList = [];

projList.push(proj1);
projList.push(proj1);
projList.push(proj1);
projList.push(proj1);

const projContainer = document.createElement("div");
projContainer.classList.add("proj-container");

for (let proj of projList) {
  let projBox = document.createElement("div");
  projBox.classList.add("proj-box");

  projBox.innerText = proj.getDescription();

  projContainer.appendChild(projBox);
}

container.appendChild(projContainer);
body.appendChild(container);
