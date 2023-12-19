const paper = document.querySelector(".paper");
const inputNumber = document.querySelector("#number");
const clearPaper = document.querySelector(".clearPaper");

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
let timesClickedEnterButton = 0;

// Functions
function addToPaper(value) {
  const paperStack = document.querySelector(".paperStack")
  const span = document.createElement('span')
  span.textContent = `${value}`
  span.classList.add("stack")
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
  for (let i = 0; i < stack.length; i++) {
    result = result + stack[i];
  }
  return result
}

// Events

clearPaper.addEventListener("click", function () {
  // stack = [];
  let stackNumbers = [];
  if (stack.length <= 1) {
    alert('Enter more numbers on stack!')
  }
  // const paperStack = document.querySelector(".paperStack");
  for (let i = 0; i < stack.length; i++) {
    stackNumbers[i] = document.querySelector(".stack");
  }
  stackNumbers.splice(0, stack.length)

  // const stackNumbers = document.querySelector(".stack");
  console.log(stackNumbers)
  stack = []
})

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

total.addEventListener("click", function () {
  checkIfIsClicked(total);
})

enterButton.addEventListener("click", function () {
  timesClickedEnterButton++;
  let whichButton = buttonInformation.whichButton;
  let clickedButton = buttonInformation.clickedButton;
  if (timesClickedEnterButton === 1) {
    stack.splice(stack[0], 1)
  }
  if (inputNumber.value === "" && whichButton !== "subtotal") {
    inputNumber.value = 0;
  }
  if (whichButton === "none" && clickedButton === false) {
    lastNumber = parseInt(inputNumber.value);
    stack.push(lastNumber);
    addToPaper(lastNumber);
    lastNumber = 0;
    inputNumber.value = "";
    resultRegister = calculate(stack);
  } else if (whichButton === "subtotal" && clickedButton === true) {
    checkIfIsClicked(subtotal);
    addToPaper(resultRegister);
  } else if (whichButton === "doNothing" && clickedButton === true) {
    checkIfIsClicked(doNothing);
    nothingRegister = inputNumber.value;
    addToPaper(nothingRegister);
    inputNumber.value = ""
  } else if (whichButton === "total" && clickedButton === true) {
    checkIfIsClicked(total);
    addToPaper(resultRegister);
    resultRegister = 0;
    inputNumber.value = "";
  }
})