//classes
export class invoice {
    // readonly client: string; // modifier readonly you cannot change the value you can access it through inside and outside the classes but you can't change the value
    // private details: string; // private modifier you can access it inside the classes you change and read the value of it 
    // public amount: number; // public modifier you can change or edit the value inside and outside the classes

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){
    
    }

    format(){
        return`${this.client} owes ₱${this.amount} for ${this.details}`;
    }
}