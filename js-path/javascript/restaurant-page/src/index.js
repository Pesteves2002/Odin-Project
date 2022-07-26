import createHomePage from "./home";
import createAbout from "./about";
import createMenu from "./menu";

const actions = [createHomePage(), createMenu(), createAbout()];

console.log("hellow");
const content = document.getElementById("content");

updatePage(createHomePage());

function updatePage(action) {
  content.replaceChildren(action);
  addButtonFunc();
}

function addButtonFunc() {
  for (let i = 0; i < 3; i++) {
    let button = document.getElementById("button" + i);
    button.addEventListener("click", () => updatePage(actions[i]));
  }
}
