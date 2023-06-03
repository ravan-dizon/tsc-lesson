"use strict";
//classes
class invoice {
    // readonly client: string; // modifier readonly you cannot change the value you can access it through inside and outside the classes but you can't change the value
    // private details: string; // private modifier you can access it inside the classes you change and read the value of it 
    // public amount: number; // public modifier you can change or edit the value inside and outside the classes
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ₱${this.amount} for ${this.details}`;
    }
}
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
