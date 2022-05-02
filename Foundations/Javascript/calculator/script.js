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

  addListeneres();
}

function addListeneres() {
  const buttons = document.querySelectorAll("button");
  for (i = 0; i < 20; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
      wrapper_fn(button.id);
    });
  }
}
create_calc();

let operation = "";
let current_value = 0;
let current_number = 0;
let after_operation = 0;
let decimal = 1;

function wrapper_fn(button_info) {
  const index = button_id.indexOf(button_info);

  // blue buttons and remainder
  if ((index + 1) % 4 === 0 || index === 2) {
    if (button_info != "=") show_char(button_info);
    else {
      show_num();
    }
    decimal = 1;
    return;
  } else {
    // specific buttons
    switch (index) {
      // AC
      case 0:
        current_number = 0;
        current_value = 0;
        after_operation = 0;
        decimal = 1;
        printScreen(current_number);
        return;
      // invert signal
      case 1:
        current_number = -current_number;
        screen.innerText = current_number;
        decimal = 1;
        return;
      // decimal point
      case 17:
        if (decimal === 1) decimal = 0.1;
        return;
      // pi number
      case 18:
        current_number = Math.PI;
        printScreen(current_number);
        after_operation = 0;
        decimal = 1;
        return;
    }
    // button_info is a int

    button_info = parseInt(button_info);

    if (after_operation === 1) {
      current_number = 0;
      after_operation = 0;
    }
    if (decimal === 1) {
      current_number *= 10;
      current_number += button_info;
    } else {
      current_number += button_info * decimal;
      decimal *= 0.1;
    }
    printScreen(current_number);
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
      current_value %= current_number;
  }
  printScreen(current_value);
  after_operation = 1;
}

function show_char(button_id) {
  operation = button_id;
  if (after_operation != 1) current_value = current_number;
  printScreen(button_id);
  after_operation = 1;
}

function printScreen(info) {
  const screen = document.getElementById("screen");
  screen.innerText = String(info).substring(0, 9);
}
