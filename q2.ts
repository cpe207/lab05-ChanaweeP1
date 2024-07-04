interface student{
  name: string;
  score: number;
}
// assign interface/type to the function definition properly
function findTopNames(students:any) {
  let Liststudent = students.filter(student => student.score > 8);
  let Topname = Liststudent.map(student => student.name);
  return Topname;
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
