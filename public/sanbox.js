"use strict";
// sample 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// sample 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//sample 3
let logDetail;
logDetail = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
};
