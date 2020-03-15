// Shadowing

// RED
var studentName = "Med";

// ----------------------- BLUE
function printStudentName(studentName) {
  // BLUE ------ BLUE
  studentName = studentName.toUpperCase();
  // --------- BLUE
  console.log(studentName);
}

printStudentName("Frank"); // FRANK

printStudentName(studentName); // MED

// --------- RED
console.log(studentName); // Med

// Global Undshowing
function printStudentNameGlobal(studentName) {
  console.log(studentName);
  console.log(window.studentName);
}

printStudentNameGlobal("Frank");
