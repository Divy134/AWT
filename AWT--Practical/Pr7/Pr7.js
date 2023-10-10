const Cal = require("./export");

const cal = new Cal();

const Add = cal.add(10, 5);
console.log("15 + 25 =", Add);

const Subtract = cal.subtract(10, 5);
console.log("80 - 40 =", Subtract);

const Multiply = cal.multiply(10, 5);
console.log("15 * 3 =", Multiply);

const Divide = cal.divide(10, 5);
console.log("30 / 2 =", Divide);
console.log("Prepared by Divy_21CE134");
