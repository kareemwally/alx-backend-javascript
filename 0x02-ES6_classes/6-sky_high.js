import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(val) {
    if (typeof val !== 'number') {
      throw TypeError('floors must be integer');
    }
    this._floors = val;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
