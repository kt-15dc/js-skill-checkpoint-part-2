const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

const calculateScore = (studentList) => {
  let result = "Total score is " + studentList.filter(student => student.score>50).map(student=>student.score*110/100).reduce((acc,num)=> acc+num,0);
  return result;
}

console.log(calculateScore(students));