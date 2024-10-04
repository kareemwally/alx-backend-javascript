import Currency from './3-currency';
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(val) {
    if (typeof val !== 'number') {
      throw TypeError('amount must be number');
    }
    this._amount = val;
  }

  get amount() {
    return this._amount;
  }

  set currency(val) {
    if (val instanceof Currency) {
      this._currency = val;
    } else {
      throw TypeError('currency must be instance of Currency class');
    }
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code}).`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    return NaN;
  }
}
