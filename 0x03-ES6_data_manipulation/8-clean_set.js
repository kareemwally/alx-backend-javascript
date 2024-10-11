export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') {
    return '';
  }
  const res = [];
  set.forEach((ele) => {
    if (ele && ele.startsWith(startString)) {
      res.push(ele.slice(startString.length));
    }
  });
  return res.join('-');
}
