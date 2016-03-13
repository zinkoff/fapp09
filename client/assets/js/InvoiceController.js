angular.module('application')
.controller('InvoiceController', function() {
  this.qty = 1;
  this.cost = 3;
  this.inCurr = 'EUR';
  this.currencies = ['USD', 'EUR', 'CNY','DKK'];
  this.usdToForeignRates = {
    USD: 1,
    EUR: 0.74,
    CNY: 6.09,
    DKK: 6.73,
    SEK: 8.03
  };

  this.total = function total(outCurr) {
    return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
  };
  this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
    return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
  };
  this.pay = function pay() {
    window.alert("Thanks1!");
  };
});