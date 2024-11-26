const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const studentLines = lines.slice(1);
      const output = [];
      const totalStudents = studentLines.length;
      output.push(`Number of students: ${totalStudents}`);
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
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.statusCode = 200;
      countStudents(process.argv[2])
        .then((outputLines) => {
          const fullResponse = ['This is the list of our students', ...outputLines].join('\n');
          res.end(fullResponse);
        })
        .catch((error) => {
          res.end(`This is the list of our students\n${error.message}`);
        });
      break;
    default:
      res.statusCode = 404;
      res.end('Not Found');
  }
});
app.listen(1245, () => {
  console.log('...');
});
module.exports = app;
