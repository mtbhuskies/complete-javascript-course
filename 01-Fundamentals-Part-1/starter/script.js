/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Kevin');
console.log(23);

let firstName = 'Denali';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'kevin';
let PI = 3.1415926535;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Denali');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1981;
console.log(typeof year);

console.log(typeof null);

let age = 40;
age = 41;

const birthYear = 1981;
// birthYear = 1980;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Barnum';
console.log(lastName);

// Math operators
const now = 2037;
const ageKevin = now - 1981;
const ageLaurel = now - 2020;
console.log(ageKevin, ageLaurel);

console.log(ageKevin * 2, ageKevin / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Kevin';
const lastName = 'Barnum';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageKevin > ageLaurel); // >, <, >=, <=
console.log(ageLaurel >= 18);

const isFullAge = ageLaurel >= 18;

console.log(now - 1991 > now - 2018);
*/

const now = 2022;
const ageKevin = now - 1981;
const ageLaurel = now - 1988;

console.log(now - 1991 > now - 2018);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageKevin + ageLaurel) / 2;
console.log(ageKevin, ageLaurel, averageAge);

////////////////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
GOOD LUCK 😀


let markWeight = 78;
let johnWeight = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

markWeight = 95;
johnWeight = 85;
markHeight = 1.88;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/
