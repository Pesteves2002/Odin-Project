const button_id = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "pi",
  "=",
];

function create_calc() {
  const calc = document.querySelector("#calc");
  const container = document.createElement("div");
  container.classList.add("calc_container");

  const screen = document.createElement("div");
  screen.setAttribute("id", "screen");
  screen.innerText = "0";

  container.appendChild(screen);

  const button_container = document.createElement("div");
  button_container.classList.add("button_container");

  for (i = 0; i < 20; i++) {
    const button = document.createElement("button");
    if (i < 3) {
      button.classList.add("misc");
    }
    if ((i + 1) % 4 === 0) {
      button.classList.add("operator");
    }
    button.textContent = button_id[i];
    button.setAttribute("id", button_id[i]);

    button_container.appendChild(button);
  }
  container.appendChild(button_container);

  calc.appendChild(container);
}

create_calc();

function show_char(button_id) {
  console.log(button_id);
  const screen = document.getElementById("screen");
  screen.innerText = button_id;
}

const buttons = document.querySelectorAll("button");

for (i = 0; i < 20; i++) {
  const button = buttons[i];
  button.addEventListener("click", function () {
    show_char(button.id);
  });
}
