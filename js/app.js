import { Button, Text } from './classes.js';

let content = null;
let container = null;
let btn = null;
let btnOperation = null;
let txtInput = null;
let tmpOperation = null;
let valor1, valor2;

window.addEventListener('load', () => {
  console.log('Evento carregado!');
  content = document.getElementById('content');
  criarContainer();
  container = document.getElementById('container');

  //text box
  inputText();
  //button creation
  criarBtn();
  operations();
  //event listeners
  btn = document.querySelector('.calcBtn');
  btnOperation = document.querySelector('.operationBtn');
  txtInput = document.querySelector('.txtInput');

  btn.addEventListener('click', (event) => {
    console.log(event);

    let value = event.target.value;
    txtInput.textContent += value;
  });

  btnOperation.addEventListener('click', (event) => {
    const calcula = (a, b) => {
      let result = null;
      if (tmpOperation === '/') {
        result = a / b;
      } else if (tmpOperation === '*') {
        result = a * b;
      } else if (tmpOperation === '-') {
        result = a - b;
      } else if (tmpOperation === '+') {
        result = a + b;
      }

      return result;
    };

    if (event.target.value === 'C') {
      txtInput.textContent = '';
    } else if (
      event.target.value === '/' ||
      event.target.value === '*' ||
      event.target.value === '-' ||
      event.target.value === '+'
    ) {
      tmpOperation = event.target.value;
      valor1 = parseInt(txtInput.textContent);
      txtInput.textContent = '';
    } else if (event.target.value === '=') {
      valor2 = parseInt(txtInput.textContent);

      txtInput.textContent = calcula(valor1, valor2);
      valor1 = null;
      valor2 = null;
      tmpOperation = null;
    }
  });
});

//Creation of contents-------------------
const criarContainer = () => {
  let div = '<div id="container"></div>';
  content.innerHTML += div;
};

const criarBtn = () => {
  let divBtn = `
  <div class="calcBtn">
  `;

  for (let i = 9; i >= 0; i--) {
    divBtn += new Button().button(i);
  }

  divBtn += '</div>';
  container.innerHTML += divBtn;
};

const operations = () => {
  let divOp = '<div class="operationBtn">';
  let op = ['/', '*', '-', '+', '=', 'C'];

  for (let i = 0; i < op.length; i++) {
    divOp += new Button().button(op[i]);
  }
  divOp += '</div>';
  container.innerHTML += divOp;
};

const inputText = () => {
  container.innerHTML += new Text().createText();
};
//--------------------------------------
// Button Event Function
