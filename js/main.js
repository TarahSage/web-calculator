const CONTAINER = document.querySelector('#container');
const SCREEN = document.querySelector('#screen');
let operator = '',
    num1 = '',
    num2 = '';


function init() {

  let numInputButtons = document.querySelectorAll('div.input');

  // Check for number and operator keypresses
  document.querySelector('body').addEventListener('keypress', keyInput);
  // Add click event listeners to input buttons
  for(let i = 0; i < numInputButtons.length; i++) {
    numInputButtons[i].addEventListener('click', clickInput);
  }

  // Set ready message
  SCREEN.innerHTML = 'Ready for input';
}

function operate(op, num1, num2) {
  num1 = num1.includes('.') ? parseFloat(num1) : parseInt(num1);
  num2 = num2.includes('.') ? parseFloat(num2) : parseInt(num2);
  if(op === '+') {
    add(num1, num2);
  } else if (op === '-') {
    subtract(num1, num2);
  } else if (op === '*') {
    multiply(num1, num2);
  } else if (op === '/') {
    divide(num1, num2);
  }
};

function add(number1, number2) {
  num1 = (number1 + number2).toString();
  num2 ='';
  SCREEN.innerHTML = num1;
}

function subtract(number1, number2) {
  num1 = (number1 - number2).toString();
  num2 ='';
  SCREEN.innerHTML = num1;
}

function multiply(number1, number2) {
  num1 = (number1 * number2).toString();
  num2 ='';
  SCREEN.innerHTML = num1;
}

function divide(number1, number2) {
  num1 = (number1 / number2).toString();
  num2 ='';
  SCREEN.innerHTML = num1;
}

function decimal(){
  if (num1 === '') {
    num1 = '0.';
    SCREEN.innerHTML = '0.0'
  } else if ((num1 && operator) && !num2) {
    num2 = '0.';
    SCREEN.innerHTML = '0.0'
  } else if ((num1 && num2 === '') && !num1.includes('.')) {
    num1 = num1 + '.';
    SCREEN.innerHTML = num1;
  } else if (num2 && !num2.includes('.')) {
    num2 = num2 + '.';
    SCREEN.innerHTML = num2;
  }
}

// Reset Calculator to starting state
function clear() {
  total = '',
  operator = '',
  num1 = '',
  num2 = '';
  SCREEN.innerHTML = 'Cleared!';
  setTimeout(() => {
    if(SCREEN.innerHTML === 'Cleared!') {
      SCREEN.innerHTML = 'Ready for input';
    }
  }, 1000);
}

function backspace() {
  if(!operator && num1) {
    num1 = num1.slice(0, -1);
    SCREEN.innerHTML = num1;
  } else if ((num1 && operator) && num2) {
    num2 = num2.slice(0, -1);
    SCREEN.innerHTML = num2;
  }
}

function keyInput(e) {
  let key = parseInt(e.keyCode),
      keyChar = String.fromCharCode(key);

  // Number key pressed
  if((key >= 48) && (key <= 57)) {
    numSet(keyChar);
  } else if (key === 13 || key === 61) {
    // Equals/Enter Key Logic
    operateCheck();
  } else if (key === 43) {
    // Add/Plus logic
    operatorCheck(keyChar);
  } else if (key === 45) {
    // Subtract/Minus Logic
    operatorCheck(keyChar);
  } else if (key === 42) {
    // Multiply/Asterisk Logic
    operatorCheck(keyChar);
  } else if (key === 47) {
    // Divide/Forward Slash Logic
    operatorCheck(keyChar);
  } else if (key === 46) {
    // Decimal/Period Logic
    decimal();
  } else if (key === 99) {
    clear();
  } else if (key === 98) {
    backspace();
  } else {
    console.log(key);
  }
}

function clickInput() {
  let inputContents = this.textContent;
  console.log(inputContents);
  if(/\d/.test(inputContents)) {
    numSet(inputContents);
  } else if (inputContents === '=') {
    operateCheck();
  } else if (inputContents === 'Clear') {
    clear();
  } else if (inputContents === '.') {
    decimal();
  } else if (this.id === 'backspace') {
    backspace();
  } else {
    operatorCheck(inputContents);
  }
}

// function to run when number input buttons are clicked or pressed
function numSet(key) {
  if(!operator) {
    num1 = num1 + key;
    SCREEN.innerHTML = num1;
  } else if (num1 && operator) {
      num2 = num2 + key;
      SCREEN.innerHTML = num2;
  }
  return;
}

// function to run when operator input buttons are clicked or pressed
function operatorCheck(key) {
  if(num1 && !num2) {
    operator = key;
    SCREEN.innerHTML = key;
    return;
  }
  operateCheck();
  return;
}

function operateCheck() {
  if((num1 && num2) && operator) {
    operate(operator, num1, num2);
  }
}

init();
