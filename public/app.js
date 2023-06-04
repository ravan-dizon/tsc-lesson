import { invoice } from './classes/invoice.js';
import { ListTemplates } from './classes/listTemplates.js';
import { payment } from './classes/payment.js';
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form'); //use this when using a class element
//Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplates(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS 
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'John', age: 22 });
console.log(docOne.name);
const docThree = {
    uid: 1,
    resourceName: 'admin',
    data: { name: 'shaun' }
};
const docFour = {
    uid: 1,
    resourceName: 'admin',
    data: ['apple', 'banana', 'grapes']
};
console.log(docThree, docFour);
