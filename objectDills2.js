/* eslint-disable strict */


function makeStudentsReport(data) {
  let grades = [];
  data.forEach(student => grades.push(`${student.name}: ${student.grade}`));
  return grades;
}

function enrollInSummerSchool(students) {
  students.forEach(function (student, index) {
    students[index].status = "In Summer school"
  })
  return students;
}
