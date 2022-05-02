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

const buttons = document.querySelectorAll("button");

for (i = 0; i < 20; i++) {
  const button = buttons[i];
  button.addEventListener("click", function () {
    wrapper_fn(button.id);
  });
}

let operation = "";
let current_value = 0;
let current_number = 0;
let after_equals = 0;

function wrapper_fn(button_info) {
  const index = button_id.indexOf(button_info);

  if ((index + 1) % 4 === 0 || index === 2) {
    if (button_info != "=") show_char(button_info);
    else {
      show_num();
    }
    return;
  } else {
    const screen = document.getElementById("screen");
    switch (index) {
      case 0:
        current_number = 0;
        current_value = 0;
        screen.innerText = current_number;
        return;
      case 1:
        current_number = -current_number;
        screen.innerText = current_number;
        return;
      case 2:
        show_char(button_info);
        return;

      case 18:
        current_number = Math.PI;
        screen.innerText = current_number;
        after_equals = 0;
        return;
    }
    // button_info is a int

    button_info = parseInt(button_info);

    if (after_equals === 1) {
      current_number = 0;
      after_equals = 0;
    }
    current_number *= 10;
    current_number += button_info;
    screen.innerText = current_number;
  }
}

function show_num() {
  switch (operation) {
    case "+":
      current_value += current_number;
      break;
    case "-":
      current_value -= current_number;
      break;
    case "*":
      current_value *= current_number;
      break;
    case "/":
      current_value /= current_number;
      break;
    case "%":
      current_value = current_value % current_number;
  }
  const screen = document.getElementById("screen");
  screen.innerText = current_value;
  after_equals = 1;
  current_number = current_value;
}

function show_char(button_id) {
  operation = button_id;
  if (after_equals != 1) current_value = current_number;
  const screen = document.getElementById("screen");
  screen.innerText = button_id;
  after_equals = 1;
}
