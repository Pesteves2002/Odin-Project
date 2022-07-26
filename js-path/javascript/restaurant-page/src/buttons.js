const buttonInfo = ["Home", "Menu", "About"];

export default function createButtons() {
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("button-container");

  for (let i = 0; i < 3; i++) {
    let button = document.createElement("button");
    button.setAttribute("id", "button" + i);
    button.innerText = buttonInfo[i];

    buttonsContainer.appendChild(button);
  }
  return buttonsContainer;
}
