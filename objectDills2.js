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

function findById(items, idNum) {
  let ret = {};
  const found = items.filter(item => item.id === idNum);
  return found[0];
}

function validateKeys(object, expectedKeys) {
  let objectKeys = [];
  objectKeys = Object.keys(object)
  if (objectKeys===expectedKeys)
  { 
    return true;
  } else
  {
    return false;
  }
}


