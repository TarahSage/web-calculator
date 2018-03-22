const CONTAINER = document.querySelector('#container');
const SCREEN = document.querySelector('#screen');
let total = '',
    operator = '',
    num1 = '',
    num2 = '';


function init() {

  let numInputButtons = document.querySelectorAll('div.num');

  // Check for number keypresses
  document.querySelector('body').addEventListener('keypress', keyInput);
  // Add event add event listeners to number inputs
  for(let i = 0; i < numInputButtons.length; i++) {
    numInputButtons[i].addEventListener('click', numInput);

  }

  // Set ready message
  SCREEN.innerHTML = 'Ready for input';
}

function operate(operator, num1, num2) {
  // Placeholder
  clear();
};

function add(num1, num2) {

}

function subtract(num1, num2) {

}

function multiply(num1, num2) {

}

function divide(num1, num2) {

}

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
    preOperatorCheck(keyChar);
  } else if (key === 45) {
    // Subtract/Minus Logic
    preOperatorCheck(keyChar);
  } else if (key === 42) {
    // Multiply/Asterisk Logic
    preOperatorCheck(keyChar);
  } else if (key === 47) {
    // Divide/Forward Slash Logic
    preOperatorCheck(keyChar);
  } else if (key === 46) {
    // Decimal/Period Logic
    SCREEN.innerHTML = keyChar;
  } else if (key === 99) {
    clear();
  } else {
    console.log(key);
  }
}

function numInput() {
  let key = this.innerHTML;
  numSet(key);
}

// function to run when number input buttons are clicked or pushed
function numSet(key) {
  if(!num1) {
    num1 = key;
    SCREEN.innerHTML = key;
  } else if ((num1 && !num2) && operator) {
    num2 = key;
    SCREEN.innerHTML = key;
  }
  return;
}

function preOperatorCheck(key) {
  // Check that the first number selection has been made
  if(num1 !== '') {
    operator = key;
    SCREEN.innerHTML = key;
    return true;
  }
  return false;
}

function operateCheck() {
  if((num1 && num2) && operator) {
    operate(operator, num1, num2);
  }
}

init();
