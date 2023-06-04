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
    //tuples
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new invoice(...values);
    }
    else {
        doc = new payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// tuple
let arr = ['john', 22, true];
arr[0] = 'Ravan';
arr[1] = 13;
arr = [2013, false, 'trish'];
let tup = ['shin', 23, true];
tup[0] = 'ryu';
tup[1] = 14;
