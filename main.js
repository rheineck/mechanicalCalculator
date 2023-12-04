let calculate = (arr) => {
  let stack = [];
  let operands = ["/", "*", "-", "+"]

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

console.log(calculate([1, 2, 3, '+', 2, '*', '-']))