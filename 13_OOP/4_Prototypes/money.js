//* / @ts-check
// BEGIN (write your solution here)
Money.prototype.getValue = function getValue () {
    return this.value;
  };
  
  Money.prototype.getCurrency = function getCurrency () {
    return this.currency;
  };
  
  Money.prototype.format = function format () {
    const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
    const formatterEUR = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  });
  
    if (this.currency === 'eur') return formatterEUR.format(this.value);
  
  return formatterUSD.format(this.value);
  };
  
  Money.prototype.add = function add (money) {
    const money1 = new Money (this.getValue(), this.getCurrency());
    let money2 = new Money (money.getValue(), money.getCurrency());
  
    if (money1.currency !== money2.currency) {
      money2 = money2.exchangeTo(money1.currency);
    };
  
    const sum = new Money (money1.value + money2.value, money1.currency);
    return sum; 
  };
  
  Money.prototype.exchangeTo = function exchangeTo(currency) {
    const rates = {eur: 0.7, usd: 1.2};
    const money = new Money(this.value * rates[currency], currency);
    return money;
  }
  
  function Money (value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  };
  
  export default Money;
  // END

  // BEGIN Tutor
const rates = {
    usd: {
      eur: 0.7,
    },
    eur: {
      usd: 1.2,
    },
  };
  
  export default function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }
  
  Money.prototype.format = function format() {
    // bad design (pass undefined the function), but it is js
    return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
  };
  
  Money.prototype.getValue = function getValue() {
    return this.value;
  };
  
  Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
  };
  
  Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
    const currency = this.getCurrency();
    if (currency === newCurrency) {
      return new Money(this.getValue(), currency);
    }
    const newValue = this.getValue() * rates[currency][newCurrency];
    return new Money(newValue, newCurrency);
  };
  
  Money.prototype.add = function add(money) {
    const convertedMoney = money.exchangeTo(this.getCurrency());
    const additionalValue = convertedMoney.getValue();
    return new Money(this.getValue() + additionalValue, this.getCurrency());
  };
  // END
  
