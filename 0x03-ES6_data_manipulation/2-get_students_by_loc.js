export default function getStudentsByLocation(list, city) {
  if (typeof city !== 'string' || !Array.isArray(list)) {
    return [];
  }
  return list.filter((ele) => ele.location === city);
}
