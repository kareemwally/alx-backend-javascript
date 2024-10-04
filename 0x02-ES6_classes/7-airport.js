export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw TypeError('name must be string');
    }
    this._name = val;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw TypeError('code must be string');
    }
    this._code = val;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
