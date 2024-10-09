interface Student {
  firstName:string,
  lastName:string,
  age:number,
  location:string
}

const student1: Student = {
  firstName: 'aly',
  lastName: 'mahmoud',
  age: '20',
  location: 'Egypt',
}

const student2: Student = {
  firstName: 'ahmed',
  lastName: 'galal',
  age: '22',
  location: 'Egypt',
}
const studentsList = [student1, student2];
console.log('+-'.repeat(10));
console.log('|Name  |  Location|');
console.log('+-'.repeat(10));
for (let student of studentsList) {
  console.log(`|${student.firstName}      ${student.location}|`); 
  console.log('+-'.repeat(10));
  }
