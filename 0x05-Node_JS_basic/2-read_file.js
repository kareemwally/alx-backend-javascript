const fs = require('fs');

function countStudents(filePath) {
  const sheet = [];
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const fields = data.split('\n')[0].split(',');
    const users = data.split('\n').slice(1);
    const subjects = [];
    for (let i = 0; i < users.length; i += 1) {
      const user = users[i].split(',');
      const obj = {};
      for (let j = 0; j < fields.length; j += 1) {
        if (j === fields.length - 1) {
          obj[fields[j].slice(0, 5)] = user[j].split('\r')[0];
          if (subjects.indexOf(user[j].split('\r')[0]) === -1)subjects.push(user[j].split('\r')[0]);
          break;
        }
        obj[fields[j]] = user[j];
      }
      sheet.push(obj);
    }
    console.log(`Number of students: ${sheet.length}`);
    for (let i = 0; i < subjects.length; i += 1) {
      const obj = {
        sub: subjects[i],
        number: 0,
        name: [],
      };
      for (let j = 0; j < sheet.length; j += 1) {
        if (sheet[j].field === subjects[i]) {
          obj.number += 1;
          obj.name.push(sheet[j].firstname);
        }
      }
      console.log(`Number of students in ${obj.sub}: ${obj.number}. List: ${obj.name.join(', ')}`);
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}
module.exports = countStudents;
