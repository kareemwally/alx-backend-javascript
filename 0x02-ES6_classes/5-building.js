export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  set sqft(val) {
    if (typeof val !== 'number') {
      throw TypeError('sqft must be number');
    }
    this._sqft = val;
  }

  get sqft() {
    return this._sqft;
  }
}
