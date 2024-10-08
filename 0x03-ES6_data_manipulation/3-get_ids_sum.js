export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.reduce((total, currentValue) => total + currentValue.id, 0);
}
