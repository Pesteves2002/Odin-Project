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
  imageContainer.classList.add("home-container");
  const myImage = new Image();
  myImage.src = pizza;
  let aboutDescription = document.createElement("div");
  aboutDescription.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  header.appendChild(buttons);
  container.appendChild(header);
  imageContainer.appendChild(aboutDescription);
  imageContainer.appendChild(myImage);
  container.appendChild(imageContainer);
  return container;
}
