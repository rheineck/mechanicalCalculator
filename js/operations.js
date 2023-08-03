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

  multiply(num1) {
    let result
    let counter = 0

    while (timesButtonClicked) {
      result = result + num1
      counter = counter + 1
    }

    return result, counter
  }

  divide(dividend, num2) {
    let result
    let counter = 0

  }
}