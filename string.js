const prompt = require("prompt-sync")();
// let obj = {
//     item : "Pen",
//     price : 13
// };
// let output = `The cost of ${obj.item} is ${obj.price}`;
// console.log(output);

// let str = "       VISHNU vardhan    ";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.charAt(15));
// console.log(str.slice(10, 16));
// console.log(str.replace("vardhan", "neelam"));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

let fullName = prompt("Enter your full name without spaces : ");
console.log(fullName);

let nameLength = fullName.length;
console.log(`UserName : @${fullName}${nameLength}`);