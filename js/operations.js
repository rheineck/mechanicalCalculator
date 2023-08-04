export class Operations {
  add(num1, num2) {
    let result
    sum = num1 + num2

    return result
  }

  subtract(num1, num2) {
    let result
    result = num2 - num1

    if (result < 0) {
      let minusDisplay = true
    } else {
      let minusDisplay = false
    }

    return result, minusDisplay
  }

  grandTotal(result) {
    result = 0
  }

  clearAll(num1) {
    num1 = 0
  }

  clear(num1) {
    let number = String(num).split("").map(num1 => { return Number(num1) })

    while (buttonClear === true) {
      number.pop()
    }

    return Number(number)
  }
}