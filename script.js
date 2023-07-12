
/*
function Calculator() {

  this.methods = {
    "+": function (a,b) { return a + b},
    "-": function (a,b) { return a - b},
    "*": function (a,b) { return a * b},
    "/": function (a,b) { return a / b},
  },

  this.calculate = function(str) {
//convert the string str to an array 
      const array = str.split('')
      console.log(array);
      //assign varibles to each element in the array
      let a =  +array[0];
      let op = array[1];
      let b = +array[2] ;
      console.log(a, b)
      if(! array.includes(op) || isNaN(a) || isNaN(b)) {
        return NaN;
      }

      //call the methods method and invoke the function inside with parameter a and b;
      else return this.methods[op](a,b);
  };
  this.addMethod = function(name,func) {
    //call the methods object and create a new function that is passed in.
      this.methods[name] = func;
      
  };
}

let calc = new Calculator;
 //calc.addMethod("*", (a,b) => a * b);
 console.log(calc.calculate('4+2'));*/


//////////////////////////////////////////////////


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

    const enteredValue = result;    
    for(let i = 0; i<enteredValue.length; i ++) {
      if(/\d/.test(enteredValue[i])) {
        firstNumber += enteredValue[i];      
      } else {
        operator += enteredValue[i];
        break;
      }
    }   
}

// find the third variable when equals button is pressed
let secondNumber = '';
function evaluate (e) {
  if ( e.target.textContent === '=') {
    
  //find the index of the non numeric character 
    let nonNumIndex = result.search(/\D/);

  //extract the part of the string after the non-numeric character and assign it to secondNumber variable
  secondNumber = result.substring(nonNumIndex + 1);

  }
  // display evaluated result to textArea
  textArea.value = JSON.stringify(operate(operator,firstNumber,secondNumber));
}

//selects button elements from html file
 const dataInput = document.querySelectorAll('.data-input'); 
 
 const backArrow = document.querySelector('.backarrow');

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
  })