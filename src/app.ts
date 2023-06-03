//classes
class invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount =  a;
    }

    format(){
        return`${this.client} owes ₱ ${this.amount} for ${this.details}`;
    }
}

const invOne = new invoice('mario', 'work on the mario website', 1000);
const invTwo = new invoice('luigi', 'work on the luigi website', 1500);

// console.log(invOne, invTwo);

let invoices: invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

