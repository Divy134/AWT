let Total_factorial; // Global variable 
function count_factorial(number)
{ 
    function factorial(num) 
    { 
        if(num===0) 
        {
             return 1; 
        } 
        else 
        { 
            return num*factorial(num-1); 
        } 
    } 
    Total_factorial = factorial(number); 
} const number = 10; // Local variable 
count_factorial(number); 
console.log(`Factorial of ${number} is: ${Total_factorial}`);