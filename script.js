let total = 0;
let prevOperation = "";
let isNewNumber = true;

const display = document.getElementById("calculatorDisplay");

function clearButton() {
  display.value = "0";
  total = 0;
  prevOperation = "";
  isNewNumber = true;
}

function numberButton(value) {
  if (display.value === "0" || isNewNumber) {
    display.value = value;
    isNewNumber = false;
  } else {
    display.value += value;
  }
}

function operationButton(operation) {
  if (!isNewNumber) {
    calculate();
  }
  prevOperation = operation;
  total = Number(display.value);
  isNewNumber = true;
}

function equalButton() {
  calculate();
  prevOperation = "";
  isNewNumber = true;
}

function calculate() {
  const currentValue = Number(display.value);

  switch (prevOperation) {
    case "+":
      total += currentValue;
      break;
    case "-":
      total -= currentValue;
      break;
    case "*":
      total *= currentValue;
      break;
    case "/":
      total /= currentValue;
      break;
    default:
      total = currentValue;
  }

  display.value = total;
  isNewNumber = true;
}

document
  .getElementById("btn0")
  .addEventListener("click", () => numberButton(0));
document
  .getElementById("btn1")
  .addEventListener("click", () => numberButton(1));
document
  .getElementById("btn2")
  .addEventListener("click", () => numberButton(2));
document
  .getElementById("btn3")
  .addEventListener("click", () => numberButton(3));
document
  .getElementById("btn4")
  .addEventListener("click", () => numberButton(4));
document
  .getElementById("btn5")
  .addEventListener("click", () => numberButton(5));
document
  .getElementById("btn6")
  .addEventListener("click", () => numberButton(6));
document
  .getElementById("btn7")
  .addEventListener("click", () => numberButton(7));
document
  .getElementById("btn8")
  .addEventListener("click", () => numberButton(8));
document
  .getElementById("btn9")
  .addEventListener("click", () => numberButton(9));

document
  .getElementById("btnAdd")
  .addEventListener("click", () => operationButton("+"));
document
  .getElementById("btnSubtract")
  .addEventListener("click", () => operationButton("-"));
document
  .getElementById("btnMultiply")
  .addEventListener("click", () => operationButton("*"));
document
  .getElementById("btnDivide")
  .addEventListener("click", () => operationButton("/"));

document.getElementById("btnClear").addEventListener("click", clearButton);

document.getElementById("btnEquals").addEventListener("click", equalButton);
