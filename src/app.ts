import { invoice } from './classes/invoice.js';
import { ListTemplates } from './classes/listTemplates.js';
import{ payment } from './classes/payment.js';
import { HasFormatter } from './interface/HashFormatters.js';


// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement; //use this when using a class element

//Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplates(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc :HasFormatter;
    if (type.value === 'invoice'){
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});

// GENERICS 


const addUID =<T extends object>(obj : T) =>{
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
let docOne = addUID({name : 'John', age: 22});

console.log(docOne.name);

//enums 
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resources <T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}
const docThree: Resources<object> ={
    uid : 1,
    resourceType: ResourceType.BOOK,
    data: {title: 'finding my self'}
}
const docFour: Resources<object> ={
    uid : 1,
    resourceType: ResourceType.PERSON,
    data: {name : 'John Ravan'}
}
console.log(docThree, docFour);