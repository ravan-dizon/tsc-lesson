"use strict";
// function
let greet;
// greet = 'hello';
greet = () => {
    console.log('helloo dabarkads');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
// add(13, '20');
add(13, 20, 7);
const sum = (a, b) => {
    return a + b;
};
let result = sum(13, 20);
