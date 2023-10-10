var str1 = `{"x":5,"y":"some string value"}`;
var obj1 = JSON.parse(str1);
console.log(typeof obj1);
console.log(obj1);

var str2 = `{"name":"Divy","age":"19","city":"Botad"}`;
console.log("Without Review Function :");
var obj2 = JSON.parse(str2);
console.log(obj2);
console.log("type of age : ", typeof obj2.age); 
console.log("After adding  Review Function :");
obj2 = JSON.parse(str2, function (key, value) {
  if (key === "age") {
    return parseInt(value);
  }
  return value;
});
console.log(obj2);
console.log("type of age : ", typeof obj2.age); 
