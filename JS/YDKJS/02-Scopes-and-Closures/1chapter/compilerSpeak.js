var students = [
  { id: 14, name: "kylie" },
  { id: 73, name: "suzy" },
  { id: 112, name: "frank" },
  { id: 6, name: "sarah" }
];

function getStudentName(id) {
  for (let student of students) {
    if (student.id === id) {
      return student.name;
    }
  }
}

var nextStudent = getStudentName(6);

console.log(nextStudent);

// side track
students.map(student => {
  let { name, id } = student;
  console.log(`${name}'s ID number is ${id}`);
});
