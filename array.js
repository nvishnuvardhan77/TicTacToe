let marks = [99, 88, 77, 66, 55];

// console.log(marks);
// console.log(marks[10]);
// marks[2] = 100;
// console.log(marks);

let n = marks.length;
// for(let i=0; i<n; i++){
//     console.log(marks[i]);
// }

let marksOfStudents = [85, 97, 44, 37, 76, 60];
let len = marksOfStudents.length;
let sum = 0;

for (let i = 0; i < len; i++) {
  sum += marksOfStudents[i];
}
// console.log("Average Marks = ", sum/len);

let prices = [250, 645, 300, 900, 50];

for (let i = 0; i < prices.length; i++) {
  prices[i] *= 0.9;
}
// console.log(prices);

let cricketers = ["Dhoni", "Virat", "Sachin", "Dravid", "Sehwag"];
cricketers.pop();
console.log(cricketers);
console.log(cricketers.toString());