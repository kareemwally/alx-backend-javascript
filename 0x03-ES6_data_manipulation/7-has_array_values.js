export default function hasValuesFromArray(set, arr) {
  let res = false;
  arr.map((ele) => {
    res = set.has(ele);
    return res;
  });
  return res;
}
