const reader = require ("readline-sync");
let util = require("./myUtils.js");
let list = require("./myUtils.js");

console.log ("please input 2 positive numbers");

const x = reader.questionInt("what is your first number? =");
const y = reader.questionInt("what is your second number? =");

const prime = [];
for (let i = x; i <= y; i++) {
    if (y % i !== 0 ) {prime.push(i);
         }
    }
    

console.log("result is " + prime + ""); 
console.log(list.print[0,5])
