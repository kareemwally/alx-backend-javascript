export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    idx = appendString + idx;
    array.push(idx);
    array.shift();
  }

  return array;
}
