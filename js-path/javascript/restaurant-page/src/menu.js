import pizza from "./pizza.jpg";
import createButtons from "./buttons";
import "./style.css";

export default function createMenu() {
  const container = document.createElement("container");
  container.classList.add("container");

  const header = document.createElement("div");
  header.classList.add("header");
  const buttons = createButtons();

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const myImage1 = new Image();
  myImage1.src = pizza;
  const myImage2 = new Image();
  myImage2.src = pizza;
  const myImage3 = new Image();
  myImage3.src = pizza;

  header.appendChild(buttons);
  container.appendChild(header);
  imageContainer.appendChild(myImage1);
  imageContainer.appendChild(myImage2);
  imageContainer.appendChild(myImage3);
  container.appendChild(imageContainer);
  return container;
}
