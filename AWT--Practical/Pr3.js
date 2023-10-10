// The let keyword 
let x = 10;
if (x === 10) {
    let x = 20;
    console.log(x); // 20 
} console.log(x); // 10

// The const keyword 
const PI = 3.14;
console.log(PI); // 3.14 
// PI = 3.1415; // TypeError: Assignment to constant variable.

// Arrow Functions 
const sum = (a, b) => a + b; // Arrow function 
console.log(sum(5, 10)); // 15 

// The (Spread Of) ... Operator 
const arr = [1, 2, 3, 4, 5];
console.log(...arr); // 1 2 3 4 5 

// For/of 
const arr1 = [1, 2, 3, 4, 5];
for (let i of arr) {
    console.log(i); // 1 2 3 4 5 
}

// Map Objects 
const map = new Map();
map.set('a', 1);

map.set('b', 2);
map.set('c', 3);
console.log(map.get('a')); // 1 

// Set Objects 
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set.has(1)); // true 

// Classes 
class Rectangle {
    constructor(height, width) {
        this.height = height; this.width = width;
    }
}

const rect = new Rectangle(10, 20);
console.log(rect.height); // 10 

// Promises 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Success!'); }, 1000);
});
promise.then((value) => {
    console.log(value); // Success! 
});

// Symbol 
const sym = Symbol('foo'); console.log(sym); // Symbol(foo) 

// Default Parameters 
const Total = (a, b = 10) => a + b; // Arrow function 
console.log(Total(5)); // 15 

// Function Rest Parameter 
const sum1 = (...args) => {
    let total = 0;
    for (let i of args) {
        total += i;
    }
    return total;
}
console.log(sum1(1, 2, 3, 4, 5)); // 15