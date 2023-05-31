// explicit types
let char : string;
let age : number;
let isOn : boolean;

// age = '2';
age = 22;

// isOn = 'TRUE';
isOn = true;

// arrays
// let ninjas : string[]; 

let ninjas : string[] = [];// ->always initialize empty array

ninjas.push('john');

// union types -> if there is a mixed data type inside your array

let mixed : (string|number|boolean)[] =[]; // -> use parenthesis when you are using union in array

mixed.push('lazy');
mixed.push(34);
mixed.push(true);
mixed.push(34);

console.log(mixed);

// -> we can also use union type in a simple/normal variable not only in array
let uid :string|number; //you can only used parenthesis when you are using array

uid = '1234';
uid = 1234;
// uid = false;

//Object
let nijaObj : object;

nijaObj = {name : 'cong', age: 30};

let nijaObj2: {
    name: string,
    age: number,
    isOff: boolean
};
nijaObj2 = {name: 'luigi', age: 23, isOff: true};