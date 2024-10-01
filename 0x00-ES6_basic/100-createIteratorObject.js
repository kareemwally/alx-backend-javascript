export default function createIteratorObject(report) {
  const res = [];
  for (const key in report.allEmployees) {
    if (key) {
      res.push(...report.allEmployees[key]);
    }
  }
  return res;
}
