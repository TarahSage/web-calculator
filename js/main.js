const CONTAINER = document.querySelector('#container');
const SCREEN = document.querySelector('#screen');
let total;
let operator;
let selection1;
let selection2;


function init() {
  let inputs = document.querySelectorAll('div.input');

  for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function() {
      SCREEN.innerHTML = this.innerHTML;
    });
  }

  SCREEN.innerHTML = 'Ready for input';
}

function input() {

}

function operate(operator, num1, num2) {

};

function add() {

}

function subtract() {

}

function multiply() {

}

function devide() {

}

function clear() {

}

init();
