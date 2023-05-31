// function

let greet : Function ; 
    
// greet = 'hello';

greet = () => {
    console.log('helloo dabarkads');
}

const add =(a: number, b: number, c: number | string = 10) => {
    console.log(a + b );
    console.log(c)
}
// add(13, '20');
add(13, 20, 7);

const sum = (a: number, b : number):number => {//-> function that return only numbers
    return a + b;
}
let result = sum(13, 20);