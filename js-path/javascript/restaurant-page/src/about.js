import pizza from "./pizza.jpg";
import createButtons from "./buttons";
import "./style.css";

export default function createAbout() {
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
  imageContainer.appendChild(myImage);
  container.appendChild(imageContainer);
  container.appendChild(header);
  return container;
}
