export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      let i = 0;
      for (const res in employeesList) {
        if (res) {
          i += 1;
        }
      }
      return i;
    },
  };
}
