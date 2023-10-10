// JSON.stringify() converts a javascript value to JSON string
var val1 = {
    fname: "Divy",
    id: "21ce134",
    age: 19,
  };
  
  console.log("Type of json.stringify : ", typeof(JSON.stringify(val1)));
  console.log(JSON.stringify(val1));
  
  var val2 = [1, 2, 3, "4", true];
  console.log(JSON.stringify(val2));
  
  // The numbers Infinity and NaN, as well as the value null, are all considered null.
  // (But they would never be omitted.)
  
  val1 = {
    number1: NaN,
    number2: Infinity,
    function1: function greet() {
      console.log("Hi there");
    },
  };
  console.log("val1", JSON.stringify(val1)); // [null,null] function is ignored.
  
  var arr1 = ["OS", "DAA"];
  arr1["subject"] = "AWT";
  console.log("arr1", arr1);
  console.log("string of arr1", JSON.stringify(arr1)); // arr1["subject"] is not included
  
  var obj = {
    name: "Divy",
    ID: "21ce134",
    Age: 18,
    dontShow: "This will not included in string",
  };
  
  // replacer function
  function replacerFun(key, value) {
    if (key === "dontShow") {
      return "****";
    }
    return value;
  }
  console.log(JSON.stringify(obj, replacerFun));
  
  // replacer function is called recursively in case of nested objects.
  var obj2 = {
    name: "Divy",
    age: 19,
    address: {
      city: "Botad",
      state: "Gujarat",
    },
  };
  console.log(
    JSON.stringify(obj2, function (key, value) {
      if (key === "city") {
        return value.toUpperCase();
      }
      return value;
    })
  );
  var obj3 = {
    subject: "AWT",
    credit: 4,
    marks: 100,
  };
  
  const strObj3 = JSON.stringify(obj3, function (key, value) {
    if (typeof value === "string") {
      return undefined;
    }
    return value;
  });
  console.log(strObj3); 
  var replacerArr = ["name", "Age"];
  
  console.log(JSON.stringify(obj));
  console.log(JSON.stringify(obj, replacerArr));
  
  var obj4 = {
    college: "CSPIT",
    departments: ["CE", "CSE", "IT", "EC"],
  };
  
  var strObj4 = JSON.stringify(obj4, null, 2);
  console.log(strObj4);
  strObj4 = JSON.stringify(obj4, null, "\t");
  console.log(strObj4);
