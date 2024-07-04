// assign interface/type to the function definition properly
function findTopNames(students) {
    var Liststudent = students.filter(function (student) { return student.score > 8; });
    var Topname = Liststudent.map(function (student) { return student.name; });
    return Topname;
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
