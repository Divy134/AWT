Array.prototype.add = function () {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
      total += this[i];
    }
    return total;
  };
  
  const numbers = [10,20,30];
  console.log(numbers.add());
console.log("Prepared by Divy_21CE134");

  