const inputBar = document.querySelector("#input");

let currentInput = "";
function updateDisplay() {
  
  document.querySelector("#input").value = currentInput;
}


function addValue(value) {
  if (/[\+\-\*\/\.]$/.test(currentInput) && /[\+\-\*\/\.]/.test(value)) {
    return;
  }
  currentInput += value;
  updateDisplay();
}

function reset() {
  currentInput = "";
  updateDisplay();
}

function delLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay()
}

function calculateResult() {
    if(currentInput.length < 1) return;
    const arrayOfInputs = currentInput.split(/([\+\-\*\/])/);
    let result = parseFloat(arrayOfInputs[0])
    for(let i = 1; i < arrayOfInputs.length; i += 2) {
        let operator = arrayOfInputs[i]
        let nextValue = parseFloat(arrayOfInputs[i + 1])
        

        switch (operator) {
            case '+':
              result += nextValue;
              break;
            case '-':
              result -= nextValue;
              break;
            case '*':
              result *= nextValue;
              break;
            case '/':
              if (nextValue === 0) return;
              result /= nextValue;
              break;
            default:
              return;
          }
    }
    currentInput = result.toString();
    updateDisplay();
  }

delLast()
