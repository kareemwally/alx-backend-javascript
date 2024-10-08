export default function getListStudentIds(l) {
  if (!Array.isArray(l)) {
    return [];
  }
  return l.map((ele) => ele.id);
}
