import {Invoice} from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { Hasformatter } from './interfaces/HasFormatter.js';

// const invOne = new Invoice('daniel', 'for a new drum pad', 400)
// const invTwo = new Invoice('Mary', 'for a new dress',200)
// console.log(invOne, invTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: Hasformatter;
    if (type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    
    console.log(doc);

})
