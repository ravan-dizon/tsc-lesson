import { invoice } from './classes/invoice.js';
const invOne = new invoice('mario', 'work on the mario website', 1000);
const invTwo = new invoice('luigi', 'work on the luigi website', 1500);
// console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.format());
});
