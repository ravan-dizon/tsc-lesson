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

