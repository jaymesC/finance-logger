import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('daniel', 'for a new drum pad', 400);
const invTwo = new Invoice('Mary', 'for a new dress', 200);
console.log(invOne, invTwo);
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(amount.value);
});
