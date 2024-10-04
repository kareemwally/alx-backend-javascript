export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('name must be string');
    }
    this._name = value;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw TypeError('code must be string');
    }
    this._code = value;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
