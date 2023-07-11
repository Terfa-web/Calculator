

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
 console.log(calc.calculate('4+2'));

//select the display-result textarea
const textArea = document.querySelector('.result');


//limit the number of characters a user can enter
textArea.addEventListener('input', () => {
  if (textArea.value.length > 20) {
    textArea.value = textArea.value.slice(0,20);
  }
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


//create a variable to hold the result of events
let result = '';

function display(e) {
  result += e.target.textContent;
  console.log( typeof result)
  textArea.value = result;
}

//take screen values and evaluate them and display contents

function calculate () {

    //convert the string str to an array 
          const arrayOfString = result.split('')
          console.log(result);
          //assign varibles to each element in the array
          let a =  +arrayOfString[0];
          let op = arrayOfString[1];
          let b = +arrayOfString[2] ;
          console.log(a, b)
          if(! array.includes(op) || isNaN(a) || isNaN(b)) {
            return NaN;
          }
}
//selects button elements from html file
 const numberZero = document.querySelector('.zero')
 const numberOne = document.querySelector('.one'); 
 const numberTwo = document.querySelector('.two');
 const numberThree = document.querySelector('.three');
 const numberFour = document.querySelector('.four');
 const numberFive = document.querySelector('.five');
 const numberSix = document.querySelector('.six');
 const numberSeven = document.querySelector('.seven');
 const numberEight = document.querySelector('.eight');
 const numberNine = document.querySelector('.nine');
 const divide = document.querySelector('.divide');
 const multiply = document.querySelector('.multiply');
 const subtract = document.querySelector('.subtract');
 const add = document.querySelector('.add');
 const dot = document.querySelector('.dot');
 const percent = document.querySelector('.percent');
 const backArrow = document.querySelector('.backarrow');
 const equals = document.querySelector('.equals');
 const clear = document.querySelector('.clear');
 



 //add event listeners to each button element
      numberZero.addEventListener('click', display);
      numberOne.addEventListener('click', display);
      numberTwo.addEventListener('click', display);
      numberThree.addEventListener('click', display);
      numberFour.addEventListener('click', display);
      numberFive.addEventListener('click', display);
      numberSix.addEventListener('click', display);
      numberSeven.addEventListener('click', display);
      numberEight.addEventListener('click', display);
      numberNine.addEventListener('click', display);
      divide.addEventListener('click', display);
      multiply.addEventListener('click', display);
      subtract.addEventListener('click', display);
      add.addEventListener('click', display);
      dot.addEventListener('click', display);
      percent.addEventListener('click', display);
      backArrow.addEventListener('click', deleteLast);
      equals.addEventListener('click', calculate);
      clear.addEventListener('click', clearScreen);