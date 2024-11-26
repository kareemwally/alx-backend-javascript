const express = require('express');
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      // Split the file into lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      // Remove the header line
      const studentLines = lines.slice(1);
      // Prepare output strings
      const output = [];
      // Total number of students
      const totalStudents = studentLines.length;
      output.push(`Number of students: ${totalStudents}`);
      // Group students by field
      const fieldGroups = {};
      studentLines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!fieldGroups[field]) {
          fieldGroups[field] = [];
        }
        fieldGroups[field].push(firstname);
      });
      for (const [field, students] of Object.entries(fieldGroups)) {
        output.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
      return output;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
const app = express();
const port = 1245;
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((outputLines) => {
      const fullResponse = ['This is the list of our students', ...outputLines].join('\n');
      res.send(fullResponse);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(port, () => {
  console.log('...');
});
module.exports = app;
