export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be string');
    } else {
      this.name = name;
    } if (typeof length !== 'number') {
      throw TypeError('Length must be Number');
    } else {
      this.length = length;
    } if (typeof students !== 'object') {
      throw TypeError('students must be Array of strings');
    } else {
      for (const i in students) {
        if (typeof students[i] !== 'string') {
          throw TypeError('students must be Array of strings');
        }
      }
      this.students = students;
    }
  }

  set length(length) {
    this._length = length;
  }

  set students(students) {
    this._students = students;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
