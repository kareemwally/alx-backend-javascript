export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const res = [];
  set.forEach((ele) => {
    if (ele.startsWith(startString)) {
      res.push(ele.slice(startString.length));
    }
  });
  return res.join('-');
}
