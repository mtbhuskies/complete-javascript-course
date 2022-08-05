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

const firstName = 'Kevin';
const job = 'Technical Support Manager';
const birthYear = 1981;
const year = 2022;

const kevin =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(kevin);

const kevinNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(kevinNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);

const age = 15;

if (age >= 16) {
  console.log(`Jack can start driving. 🚗`);
} else {
  const yearsLeft = 16 - age;
  console.log(`Jack is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2007;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀

const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(
    `Mark's has a BMI of ${markBMI} and is higher than John's BMI of ${johnBMI}`
  );
} else {
  console.log(
    `John's has a BMI of ${johnBMI} and is higher than Mark's BMI of ${markBMI}`
  );
}
*/
// type conversion
const inputYear = '1981';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Kevin'));
console.log(typeof NaN);

console.log(String(40), 40);

// type coercion
// numbers get converted into strings with + operator
console.log('I am ' + 40 + ' years old');

// minus operator converts to strings to numbers
console.log('23' - '10' - 3);
// multiplier operator only works with numbers, converts to numbers
console.log('23' * '2');

let n = '1' + 1; // '11'
n = n - 1; // 11-1 = 10
console.log(n); // 10
