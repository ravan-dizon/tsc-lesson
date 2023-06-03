//interfaces
interface isPerson{
    name: string;
    age: number;
    speak(a: string) : void;
    spend(a: number) : number;
}
const me : isPerson ={
    name: 'John Ravan',
    age: 22,
    speak(text: string) : void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log('I spent', amount);
        return amount;
    }
}
const greetPerson = (person: isPerson) => {
    console.log('hello', person.name)
}
greetPerson(me);
console.log(me);

