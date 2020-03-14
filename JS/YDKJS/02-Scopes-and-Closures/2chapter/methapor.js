// out/global scope: RED

var students = [
  { id: 14, name: "kyle" },
  { id: 73, name: "suzy" },
  { id: 112, name: "frank" },
  { id: 6, name: "sarah" }
];

function getStudentName(studentId) {
  // function scope: BLUE

  for (let student of students) {
    // loop scope: GREEN

    if (student.id == studentId) {
      return student.name;
    }
  }
}

var nextStudent = getStudentName(73);

console.log(nextStudent);
console.log(getStudentName(6));

// ENGINE, responsible for start-to-finish compilation
// COMPILER, parsing and code-generation
// SCOPE MANAGER, collects and maintains lookup list of all the
// declared variables/identifiers, and enforces a set of rules as
// to how these are accessible to currently executing code
