function calculateNumber(TYPE, a, b) {
  let val1 = Math.round(a);
  let val2 = Math.round(b);
  TYPE = TYPE.toUpperCase();
  if (TYPE === 'SUM') {
    return val1 + val2;
  }
  if (TYPE === 'SUBTRACT') {
    return val1 - val2;
  }
  if (TYPE === 'DIVIDE') {
    if (val2 === 0) {
      return 'Error';
    }
    return val1 / val2;
  }
  return 0;
}
module.exports = calculateNumber;
