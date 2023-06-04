//classes
export class payment {
    // readonly client: string; // modifier readonly you cannot change the value you can access it through inside and outside the classes but you can't change the value
    // private details: string; // private modifier you can access it inside the classes you change and read the value of it 
    // public amount: number; // public modifier you can change or edit the value inside and outside the classes
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ₱${this.amount} for ${this.details}`;
    }
}
