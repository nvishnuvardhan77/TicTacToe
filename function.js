const prompt = require("prompt-sync")();

// const vowels = (s) => {
//   let n = s.length;
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     let ch = s[i];

//     if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
//       count++;
//     }
//   }
//   return count;
// };
// let s = prompt("Enter a word : ");
// console.log("Number of vowels = ", vowels(s));

// let arr = ["hyderabad", "mumbai", "kolkata", "ayodhya"];

// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// })

// let nums = [1, 2, 3, 4, 5];

// let newArr = nums.filter((val) => {
//     return val % 2 == 0;
// });

// console.log(newArr);

// let marks = [87, 93, 100, 42, 66, 77, 90, 91];

// let newArr = marks.filter((mark) => {
//     return mark > 90;
// });
// console.log(newArr);

let n = Number(prompt("Enter a value for n : "));
let arr = [];

for(let i=0; i<n; i++){
    arr.push(i+1);
}

let sum = arr.reduce((res, curr) => {
    return res + curr;
});

let product = arr.reduce((res, curr) => {
    return res * curr;
});
console.log("Sum  = ", sum);
console.log("Product  = ", product);