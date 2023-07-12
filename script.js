

//select the display-result textarea
const textArea = document.querySelector('.textarea');


//limit the number of characters a user can enter
textArea.addEventListener('input', () => {
  if (textArea.value.length > 20) {
    textArea.value = textArea.value.slice(0,20);
  } else if ( isNaN(textArea.value) ) { alert(`Only numbers are allowed. Thanks`) 
  location.reload()}
});

//clear the screen 
  function  clearScreen () {
    location.reload();
  };

// delete the last item on the string list
  function deleteLast () {
    result = result.slice(0,-1)|| "0";
    textArea.value = result;    
  };



//the operate function

function operate (op, a, b) {
  let numA = +a;
  let numB = +b;
  if (op === '+') {  
     return numA + numB;
  } else if (op === '-') {
    return numA - numB;
  } else if (op === '*') {
    return numA * numB;
  } else if (op === '/') {
    return numA / numB;
  }
}

let result = '';
function display(e) {
  result += e.target.textContent;
  textArea.value = result;
}

//store the first number when an operator is pressed
 
//create a variables to hold the result of events
let firstNumber ='';
let operator = '';

function storeFirstItem (e) {
//find out if e.target.textContent contains an operator if it does, call operate function.


    const enteredValue = result;    
    for(let i = 0; i<enteredValue.length; i ++) {
      if(/\d/.test(enteredValue[i])) {
        firstNumber += enteredValue[i];      
      } else {
        operator += enteredValue[i];
        break;
      }
    }  
    console.log(firstNumber)
    console.log(operator) 
}

// find the third variable when equals button is pressed
let secondNumber = '';
function evaluate (e) {
  if ( e.target.textContent === '=') {
    
    
  //find the index of the non numeric character and assign it to nonNumIndex
    let nonNumIndex = result.search(/\D/);

  //extract the part of the string after the non-numeric character and assign it to secondNumber variable
  secondNumber = result.substring(nonNumIndex + 1);

  }
  // display evaluated result to textArea
  textArea.value = JSON.stringify(operate(operator,firstNumber,secondNumber))
  result = JSON.stringify(operate(operator,firstNumber,secondNumber));
  
  firstNumber = '';//empty out firstNum and operator.
  operator = '' ;
}

//selects button elements from html file
 const dataInput = document.querySelectorAll('.data-input'); 
 
 const backArrow = document.querySelector('.backarrow');

 const percent = document.querySelector('.percent');

 const equals = document.querySelector('.equals');

 const clear = document.querySelector('.clear');
 
 let operators = document.querySelectorAll('.operator');



 //add event listeners to each input button element

 dataInput.forEach((input) => {
      input.addEventListener('click', display)
 });

  backArrow.addEventListener('click', deleteLast);

  equals.addEventListener('click', evaluate);

  clear.addEventListener('click', clearScreen);
  
  operators.forEach((operator) => {
    operator.addEventListener('click', storeFirstItem);
  });

  percent.addEventListener('click', () => {
    textArea.value = textArea.value/100;
  });