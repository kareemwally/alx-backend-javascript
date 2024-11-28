class Utils {
  static calculateNumber(type, a, b) {
    let val1 = Math.round(a);
    let val2 = Math.round(b);
    type = type.toUpperCase();
    if (type === 'SUM') {
      return val1 + val2;
    }
    if (type === 'SUBTRACT') {
      return val1 - val2;
    }
    if (type === 'DIVIDE') {
      if (val2 === 0) {
        return 'Error';
      }
      return val1 / val2;
    }
  }
}

module.exports = Utils;
