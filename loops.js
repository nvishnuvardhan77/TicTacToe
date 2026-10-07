// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum += i;
// }
// console.log("Sum = ", sum);

// console.log("Loop has ended");

// let str = "ApnaCollege";
// for(let i of str){
//     console.log("i = ", i);
// }

// let student = {
//     name: "Vishnu Vardhan",
//     rollNo: 327,
//     cgpa: 9.01,
//     isPass: true
// };

// for(let key in student){
//     console.log("Key = ", key, " Value = ", student[key]);
// }
// console.log(student["name"]);

// for(let i=0; i<=100; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

const prompt = require("prompt-sync")();

let key = 13;
let input;
while (key != input) {
  console.log("Guess a number");
  input = Number(prompt("Enter a number : "));
}
console.log("You guessed right");
