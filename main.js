const paper = document.querySelector(".paper");
const inputNumber = document.querySelector("#number");
const clearPaper = document.querySelector(".clearPaper");
const paperStack = document.querySelector(".paperStack");

// Operators
const total = document.querySelector(".total");
const minus = document.querySelector(".minus");
const doNothing = document.querySelector(".doNothing");
const subtotal = document.querySelector(".subtotal");
const timesButton = document.querySelector(".timesButton button");
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
let negativeNumber;
let nothingRegister;
let buttonInformation = {
  clickedButton: false,
  whichButton: "none",
  buttonSymbol: " ",
  isTimesButton: false
};
let resultRegister = 0;
let timesClickedEnterButton = 0;
let elementsOnPaper = 0;

// Functions
function addToPaper(value, symbol) {
  elementsOnPaper++;
  const span = document.createElement('span');
  span.textContent = `${value} ${symbol}`;
  span.classList.add("stack");
  paperStack.appendChild(span);
}

function updateDisplay(value) {
  inputNumber.value += value.slice(0, 10);
}

function checkIfIsClicked(button) {
  let clickedButton = buttonInformation.clickedButton;
  let whichButton = buttonInformation.whichButton;
  let buttonSymbol = buttonInformation.buttonSymbol;
  let isTimesButton = buttonInformation.isTimesButton;

  if (clickedButton) {
    clickedButton = false;
  } else {
    clickedButton = true;
  }

  if (whichButton === "none") {
    if (button === timesButton) {
      whichButton = "timesButton";
      isTimesButton = true;
    } else {
      whichButton = button.classList[0];
    }
  } else {
    whichButton = "none";
    isTimesButton = false;
  }

  if (whichButton === "doNothing") {
    buttonSymbol = "<";
  } else if (whichButton === "total") {
    buttonSymbol = "*";
  } else if (whichButton === "subtotal") {
    buttonSymbol = "&";
  } else if (whichButton === "minus") {
    buttonSymbol = "-";
  } else {
    buttonSymbol = " ";
  }

  button.classList.toggle("selected");
  buttonInformation.clickedButton = clickedButton;
  buttonInformation.whichButton = whichButton;
  buttonInformation.buttonSymbol = buttonSymbol;
  buttonInformation.isTimesButton = isTimesButton;
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
  if (elementsOnPaper <= 1) {
    alert('Enter more numbers on stack!')
  }
  paperStack.innerHTML = "";
  stack = [];
  elementsOnPaper = 0;
  buttonInformation = {
    clickedButton: false,
    whichButton: "none",
    buttonSymbol: " "
  };
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
  total.classList.remove("selected");
  subtotal.classList.remove("selected");
  minus.classList.remove("selected");
})

subtotal.addEventListener("click", function () {

  if (timesButton.classList[0] === "selected") {
    timesButton.classList.remove("selected");
    buttonInformation = {
      clickedButton: true,
      whichButton: "subtotal",
      buttonSymbol: "&",
      isTimesButton: false
    };
  } else {
    checkIfIsClicked(subtotal);
  }

  doNothing.classList.remove("selected");
  total.classList.remove("selected");
  minus.classList.remove("selected");
})

total.addEventListener("click", function () {

  if (timesButton.classList[0] === "selected") {
    timesButton.classList.remove("selected");
    buttonInformation = {
      clickedButton: true,
      whichButton: "total",
      buttonSymbol: "*",
      isTimesButton: false
    };
  } else {
    checkIfIsClicked(total);
  }

  subtotal.classList.remove("selected");
  minus.classList.remove("selected");
  doNothing.classList.remove("selected");
})

minus.addEventListener("click", function () {
  checkIfIsClicked(minus);
  total.classList.remove("selected");
  subtotal.classList.remove("selected");
  doNothing.classList.remove("selected");
})

timesButton.addEventListener("click", function () {
  if (total.classList[1] === "selected") {
    total.classList.remove("selected");
  }
  checkIfIsClicked(timesButton);
  total.classList.remove("selected")
})

enterButton.addEventListener("click", function () {
  timesClickedEnterButton++;
  let whichButton = buttonInformation.whichButton;
  let clickedButton = buttonInformation.clickedButton;
  let buttonSymbol = buttonInformation.buttonSymbol;

  if (timesClickedEnterButton === 1) {
    stack.splice(stack[0], 1)
  }

  if (inputNumber.value === "" && whichButton !== "subtotal") {
    inputNumber.value = 0;
  }

  if (whichButton === "none" && clickedButton === false) {
    lastNumber = parseInt(inputNumber.value);
    stack.push(lastNumber);
    addToPaper(lastNumber, buttonSymbol);
    lastNumber = 0;
    inputNumber.value = "";
    resultRegister = calculate(stack);
  } else if (whichButton === "subtotal" && clickedButton === true) {
    checkIfIsClicked(subtotal);
    addToPaper(resultRegister, buttonSymbol);
  } else if (whichButton === "doNothing" && clickedButton === true) {
    checkIfIsClicked(doNothing);
    nothingRegister = inputNumber.value;
    addToPaper(nothingRegister, buttonSymbol);
    inputNumber.value = ""
  } else if (whichButton === "total" && clickedButton === true) {
    checkIfIsClicked(total);
    addToPaper(resultRegister, buttonSymbol);
    stack = [];
    resultRegister = 0;
    inputNumber.value = "";
  } else if (whichButton === "minus" && clickedButton === true) {
    checkIfIsClicked(minus);
    negativeNumber = - parseInt(inputNumber.value);
    stack.push(negativeNumber)
    addToPaper(-negativeNumber, buttonSymbol);
    negativeNumber = 0;
    inputNumber.value = "";
    resultRegister = calculate(stack);
  } else if (whichButton === "timesButton" && clickedButton === true) {
    lastNumber = parseInt(inputNumber.value);
    stack.push(lastNumber);
    addToPaper(lastNumber, buttonSymbol);
    lastNumber = 0;
    resultRegister = calculate(stack);
  }
})