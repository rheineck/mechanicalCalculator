let paperStack = parseFloat(document.querySelector(".paper").textContent)
let enterButton = document.getElementById("enter")

let stackNumbers = [];
let operators = ["/", "*", "-", "+"]
let displayValue = ""

// ----- Debug -----

console.log(calculate([1, 2, 3, '+', 2, '*', '-']))

// -----------------

function addToPaper() {

  stackNumbers.push(paperStack)

  for (let i = 0; i < stackNumbers.length; i++) {
    let lastNumber = document.createElement('span')
    lastNumber.value = `${stackNumbers[i]}`
  }

  console.log(stackNumbers)
}

function calculate(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (operators.includes(arr[i])) {
      let b = stackNumbers.pop()
      let a = stackNumbers.pop()

      arr[i] === "*" ? stackNumbers.push(a * b) :
        arr[i] === "/" ? stackNumbers.push * (a / b) :
          arr[i] === "+" ? stackNumbers.push(a + b) :
            stackNumbers.push(a - b)
    }
    else stackNumbers.push(arr[i])

  }
  return stackNumbers
}

function appendToDisplay(value) {
  displayValue += value.slice(0, 10);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("paper").value = displayValue
}
