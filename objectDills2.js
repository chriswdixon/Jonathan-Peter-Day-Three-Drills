/* eslint-disable strict */


function makeStudentsReport(data) {
  let grades = [];
  data.forEach(student => grades.push(`${student.name}: ${student.grade}`));
  return grades;
}


