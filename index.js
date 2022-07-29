// Import stylesheets
import './style.css';

const $formAddNum = document.querySelector('#formAddNum');

$formAddNum.addEventListener('submit', (event) => {
  event.preventDefault();

  const $firstNum = parseFloat(document.querySelector('#firstNum').value);
  const $secondNum = parseFloat(document.querySelector('#secondNum').value);

  const $operator = document.querySelector(
    'input[name=operator]:checked'
  ).value;

  const calculation = {
    '+': function ($firstNum, $secondNum) {
      return $firstNum + $secondNum;
    },
    '-': function ($firstNum, $secondNum) {
      return $firstNum - $secondNum;
    },
    '/': function ($firstNum, $secondNum) {
      return $firstNum / $secondNum;
    },
  };

  function round(a, b) {
    return Number(Math.round(a + 'e' + b) + 'e-' + b).toFixed(b);
  }

  const result = round(calculation[$operator]($firstNum, $secondNum), 2);

  document.querySelector('#resultAdd').value = result;
});
