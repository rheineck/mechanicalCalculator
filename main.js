let paperStack = parseFloat(document.querySelector('.paper').textContent)
let stack = [];
let operands = ["/", "*", "-", "+"]
let displayValue = ""

console.log(paperStack)
console.log(stack.push(paperStack))

function calculate(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (operands.includes(arr[i])) {
      let b = stack.pop()
      let a = stack.pop()

      arr[i] === "*" ? stack.push(a * b) :
        arr[i] === "/" ? stack.push * (a / b) :
          arr[i] === "+" ? stack.push(a + b) :
            stack.push(a - b)
    }
    else stack.push(arr[i])

  }
  return stack
}

function appendToDisplay(value) {
  displayValue += value.slice(0, 10);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("paper").value = displayValue
}

console.log(calculate([1, 2, 3, '+', 2, '*', '-']))