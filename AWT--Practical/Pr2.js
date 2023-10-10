var array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]; 
var array2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]; 
console.log(array.length); 
console.log(array[0]); 
console.log(array[9]);
console.log(array.push(22)); 
console.log(array.pop()); 
console.log(array.shift()); 
console.log(array.unshift(2)); 
console.log(array.join(" * "));

// array.splice();................ 
const months = ['Jan', 'March', 'April', 'June']; 
months.splice(1, 0, 'Feb') 
console.log(months); // replaces 1 element at index 4 
months.splice(2, 2, 'May') 
console.log(months); // replaces 1 element at index 4

// array.concat();................
var concat_array = array.concat(array2); 
console.log(concat_array); 

// array.flat();.................. 
var array3 = [1,2,3,[4,5,6],[7,8,9]];
console.log(array3.flat());

// array.slice();................. 
const friends = ['Divy', 'Abhi', 'Jaivin', 'Ankit', 'Dhruv']; 
console.log(friends.slice(2)); // expected output: ["Jaivin", "Ankit", "Dhruv"] 
console.log(friends.slice(2, 4)); // expected output: ["Jaivin", "Ankit"] 
console.log(friends.slice(1, 5)); // expected output: ["Abhi", "Jaivin", "Ankit", "Dhruv"]


console.log(friends.slice(-2)); // expected output: ["Ankit", "Dhruv"] 
console.log(friends.slice(2, -1)); // expected output: ["Jaivin", "Ankit"] 
console.log(friends.slice()); // expected output: ["Divy", "Abhi", "Jaivin", "Ankit", "Dhruv"] 
// Create an object representing a person with properties like name, age, and gender. Implement a function that displays the person's details 
var obj ={ 
    name : "Divy", 
    age : 20,
    gender : "Male" 
} 
var person_detail=(obj)=> 
{ 
    for(var i in obj) 
    { 
        console.log(i + " : " + obj[i]);  // i is key and obj[i] is value 
    } 
} 
person_detail(obj);