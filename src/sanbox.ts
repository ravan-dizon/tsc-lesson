// sample 1
let greet : (a: string, b: string) => void;

greet = (name: string, greeting : string) =>{
    console.log(`${name} says ${greeting}`);
}

// sample 2
let calc: (a: number, b : number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) =>{

    if(action === 'add'){
        return numOne + numTwo;
    }else{
        return numOne - numTwo;
    }
}
//sample 3
let logDetail: (obj: {name: string, age: number}) => void;

logDetail = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`)
}