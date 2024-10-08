export default function getListStudentIds(l) {
  if (typeof l !== 'object' || l.length === undefined) {
    return [];
  }
  return l.map((ele) => ele.id);
}
