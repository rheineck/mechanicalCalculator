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

let stack = [parseInt(paper.textContent)];
let lastNumber;

function addToPaper() {
  const paperStack = document.querySelector(".paperStack")
  const span = document.createElement('span')
  span.textContent = `${lastNumber}`
  paperStack.appendChild(span)
}

function updateDisplay(value) {
  inputNumber.value += value.slice(0, 10)
}

enterButton.addEventListener("click", function () {
  if (inputNumber.value === "") {
    inputNumber.value = 0
  }
  lastNumber = parseInt(inputNumber.value)
  stack.push(lastNumber)
  addToPaper();
  lastNumber = 0;
  inputNumber.value = "";
})

clearButton.addEventListener("click", function () {
  inputNumber.value = "";
})

ceButton.addEventListener("click", function () {
  let newNumber = inputNumber.value.slice(0, -1)
  inputNumber.value = newNumber;
})