const paper = document.querySelector(".paper");
const inputNumber = document.querySelector("#number");

// Operators
const total = document.querySelector(".total");
const minus = document.querySelector(".minus");
const doNothing = document.querySelector(".doNothing");
const subtotal = document.querySelector(".subtotal");
const timesButton = document.querySelector(".timesButton");
const enterButton = document.querySelector("#enter");
const clearButton = document.querySelector('.clearButton');
const ceButton = document.querySelector('.CEButton');

// Numbers
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const twoZeros = document.getElementById("twoZeros");
const threeZeros = document.getElementById("threeZeros");

// Variables
let stack = [parseInt(paper.textContent)];
let lastNumber;
let nothingRegister;
let buttonInformation = {
  clickedButton: false,
  whichButton: "none"
};
let resultRegister = 0;

// Functions
function addToPaper(value) {
  const paperStack = document.querySelector(".paperStack")
  const span = document.createElement('span')
  span.textContent = `${value}`
  paperStack.appendChild(span)
}

function updateDisplay(value) {
  inputNumber.value += value.slice(0, 10)
}

function checkIfIsClicked(button) {
  let clickedButton = buttonInformation.clickedButton;
  let whichButton = buttonInformation.whichButton;
  if (clickedButton) {
    clickedButton = false;
  } else {
    clickedButton = true;
  }
  if (whichButton === "none") {
    whichButton = button.classList[0];
  } else {
    whichButton = "none";
  }
  button.classList.toggle("selected")
  buttonInformation.clickedButton = clickedButton;
  buttonInformation.whichButton = whichButton;
}

function addToRegister(value, stack) {
  value = parseInt(inputNumber.value);
  stack.push(value);
  value = 0;
  inputNumber.value = "";
}

function calculate(stack) {
  let result = 0;
  for (let i = 1; i < stack.length; i++) {
    result = result + stack[i];
  }
  return result
}

// Events

clearButton.addEventListener("click", function () {
  inputNumber.value = "";
})

ceButton.addEventListener("click", function () {
  let newNumber = inputNumber.value.slice(0, -1)
  inputNumber.value = newNumber;
})

doNothing.addEventListener("click", function () {
  checkIfIsClicked(doNothing);
})

subtotal.addEventListener("click", function () {
  checkIfIsClicked(subtotal);
})

enterButton.addEventListener("click", function () {
  let whichButton = buttonInformation.whichButton;
  let clickedButton = buttonInformation.clickedButton;
  let resultRegister;
  if (inputNumber.value === "") {
    inputNumber.value = 0
  }
  if (whichButton === "doNothing" && clickedButton === true) {
    nothingRegister = inputNumber.value;
    checkIfIsClicked(doNothing)
    addToPaper(nothingRegister);
    nothingRegister = 0;
    inputNumber.value = "";
  } else if (whichButton === "subtotal" && clickedButton === true) {
    resultRegister
  } else if (whichButton === "none" && clickedButton === false) {
    lastNumber = parseInt(inputNumber.value);
    stack.push(lastNumber);
    addToPaper(lastNumber);
    lastNumber = 0;
    inputNumber.value = "";
    resultRegister = calculate(stack);
  }
})

