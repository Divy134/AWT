function add()
{
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = a + b;
    document.getElementById("result").innerHTML = c;
}

function sub()
{parseInt
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = a - b;
    document.getElementById("result").innerHTML = c;
}

function mul()
{
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = a * b;
    document.getElementById("result").innerHTML = c;
}

function div()
{
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = a / b;
    document.getElementById("result").innerHTML = c;
}

// Strict mode in JavaScript...................

// JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode".


// function myStrictFunction() {
//     // Function-level strict mode syntax
//     "use strict";
//     function nested() {
//       return "And so am I!";
//     }
//     return `Hi! I'm a strict mode function! ${nested()}`;
//   }
//   function myNotStrictFunction() {
//     return "I'm not strict.";
//   }



// SyntaxError: "use strict" not allowed in function with default parameter

// function sum(a = 1, b = 2) {
//     "use strict";
//     return a + b;
//   }