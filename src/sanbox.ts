// any type

let age: any;

age = true;
console.log(age);

age = 'hello';
console.log(age);

age = { name: 'superV'};
console.log(age);

let mixed: any[] = [];

mixed.push(34);
mixed.push('hello');
mixed.push(true);
console.log(mixed);

let ninjaAny : {name : any, age: any};

ninjaAny = {name: 'ivy', age:'23'};
console.log(ninjaAny);

ninjaAny = {name: true , age:34};
console.log(ninjaAny);

console.log("test");
console.log("test1");