"use strict";
// classes
var Invoice = /** @class */ (function () {
    // client: string;
    // details: string;
    // amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('daniel', 'for a new drum pad', 400);
var invTwo = new Invoice('Mary', 'for a new dress', 200);
console.log(invOne, invTwo);
var form = document.querySelector('.new-item-form');
// Inputs
var type = document.querySelector('#type');
var toForm = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(amount.value);
});
