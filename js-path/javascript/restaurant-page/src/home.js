import pizza from "./pizza.jpg";
import createButtons from "./buttons";
import "./style.css";

export default function createHomePage() {
  const container = document.createElement("container");
  container.classList.add("container");

  const header = document.createElement("div");
  header.classList.add("header");
  const buttons = createButtons();

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const myImage = new Image();
  myImage.src = pizza;

  header.appendChild(buttons);
  container.appendChild(header);
  imageContainer.appendChild(myImage);
  container.appendChild(imageContainer);
  return container;
}
