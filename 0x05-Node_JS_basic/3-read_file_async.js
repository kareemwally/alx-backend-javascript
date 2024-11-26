const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const studentLines = lines.slice(1);
      const totalStudents = studentLines.length;
      console.log(`Number of students: ${totalStudents}`);
      const fieldGroups = {};
      studentLines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!fieldGroups[field]) {
          fieldGroups[field] = [];
        }
        fieldGroups[field].push(firstname);
      });
      for (const [field, students] of Object.entries(fieldGroups)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
module.exports = countStudents;
