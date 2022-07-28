import "./style.css";
import { todo } from "./todo";
import { project } from "./project";

let projList = [];

const todo1 = new todo("project JS", "Make a todo list", "sometime", 9);
const proj1 = new project("odin");

proj1.addToDo(todo1);
projList.push(proj1);
projList.push(proj1);
projList.push(proj1);
projList.push(proj1);

const body = document.body;

function drawProjectPage() {
  body.replaceChildren();
  const container = document.createElement("div");
  container.classList.add("container");

  const projContainer = document.createElement("div");
  projContainer.classList.add("proj-container");
  let i = 0;
  for (let proj of projList) {
    let projBox = document.createElement("div");
    projBox.classList.add("proj-box");
    projBox.setAttribute("id", i);
    projBox.innerText = proj.getDescription();
    projBox.addEventListener("click", () => drawToDoListPage(projBox.id));
    i++;

    projContainer.appendChild(projBox);
  }

  const addProjectButton = document.createElement("button");
  addProjectButton.classList.add("add-project-button");

  addProjectButton.addEventListener("click", () => drawAddProjectPrompt());

  container.appendChild(projContainer);
  container.appendChild(addProjectButton);
  body.appendChild(container);
}

function drawAddProjectPrompt() {
  const newProjectContainer = document.createElement("div");
  newProjectContainer.classList.add("new-project-container");

  const projectNameButton = document.createElement("input");
  projectNameButton.setAttribute("id", "project-name-button");

  const submitButton = document.createElement("button");
  submitButton.classList.add("submit-button");
  submitButton.addEventListener("click", () => createNewProject());

  newProjectContainer.appendChild(projectNameButton);
  newProjectContainer.appendChild(submitButton);
  body.prepend(newProjectContainer);
}
drawProjectPage();

function createNewProject() {
  const newProjectName = document.getElementById("project-name-button").value;

  if (newProjectName != "") {
    const newProj = new project(newProjectName);

    projList.push(newProj);
  }
  drawProjectPage();
}

function drawToDoListPage(index) {
  body.replaceChildren();
  const container = document.createElement("div");
  container.classList.add("container");

  const projectList = projList.at(index).getToDoList();

  const toDoContainer = document.createElement("div");
  toDoContainer.classList.add("to-do-container");

  for (let toDo of projectList) {
    let toDoBox = document.createElement("div");
    toDoBox.classList.add("to-do-box");

    toDoBox.innerText = toDo.getDescription();

    toDoContainer.appendChild(toDoBox);
  }

  const addToDoButton = document.createElement("button");
  addToDoButton.classList.add("add-to-do-button");

  addToDoButton.addEventListener("click", () => drawAddToDoPrompt(index));

  container.appendChild(toDoContainer);
  container.appendChild(addToDoButton);
  body.appendChild(container);
}

function drawAddToDoPrompt() {
  const newToDoContainer = document.createElement("div");
  newToDoContainer.classList.add("new-to-do-container");

  const toDoTitleButton = document.createElement("input");
  toDoTitleButton.setAttribute("id", "to-do-title-button");

  const toDoDescButton = document.createElement("input");
  toDoDescButton.setAttribute("id", "to-do-desc-button");
  const toDoDueDateButton = document.createElement("input");
  toDoDueDateButton.setAttribute("id", "to-do-due-date-button");
  const toDoPriorityButton = document.createElement("input");
  toDoPriorityButton.setAttribute("id", "to-do-priority-button");

  const submitButton = document.createElement("button");
  submitButton.classList.add("submit-button");
  submitButton.addEventListener("click", () => createNewToDo());

  newToDoContainer.appendChild(toDoTitleButton);
  newToDoContainer.appendChild(toDoDescButton);
  newToDoContainer.appendChild(toDoDueDateButton);
  newToDoContainer.appendChild(toDoPriorityButton);
  newToDoContainer.appendChild(submitButton);
  body.prepend(newToDoContainer);
}

function createNewToDo(index) {
  const newToDoTitle = document.getElementById("to-do-title-button").value;
  const newToDoDesc = document.getElementById("to-do-desc-button").value;
  const newToDoDueDate = document.getElementById("to-do-due-date-button").value;
  const newToDoPriority = document.getElementById(
    "to-do-priority-button"
  ).value;

  const newToDo = new todo(
    newToDoTitle,
    newToDoDesc,
    newToDoDueDate,
    newToDoPriority
  );

  projList.at(index).addToDo(newToDo);

  drawToDoListPage(index);
}
