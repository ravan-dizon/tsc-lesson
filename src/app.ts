

import { invoice } from './classes/invoice.js';
import{ payment } from './classes/payment.js';
import { HasFormatter } from './interface/HashFormatters.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new invoice ('luigi', 'web work', 300);
// docTwo = new payment ('mario', 'programming work', 5000);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new invoice('mario', 'work on the mario website', 1000);
// const invTwo = new invoice('luigi', 'work on the luigi website', 1500);

// // console.log(invOne, invTwo);

// let invoices: invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// // console.log(invoices);

// invoices.forEach(inv => {
//     console.log(inv.format());
// });


// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement; //use this when using a class element

//Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc :HasFormatter;
    if (type.value === 'invoice'){
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});

// //interfaces
// interface isPerson{
//     name: string;
//     age: number;
//     speak(a: string) : void;
//     spend(a: number) : number;
// }
// const me : isPerson ={
//     name: 'John Ravan',
//     age: 22,
//     speak(text: string) : void{
//         console.log(text);
//     },
//     spend(amount: number): number{
//         console.log('I spent', amount);
//         return amount;
//     }
// }
// const greetPerson = (person: isPerson) => {
//     console.log('hello', person.name)
// }
// greetPerson(me);
// console.log(me);