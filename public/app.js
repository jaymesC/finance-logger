import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// const invOne = new Invoice('daniel', 'for a new drum pad', 400)
// const invTwo = new Invoice('Mary', 'for a new dress',200)
// console.log(invOne, invTwo);
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
