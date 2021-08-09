// this is a console.log()
// single line comment
/*
this is a multiline comment
*/
// console.log('hello planet');

// variables
// declaring a variable
// let client;
// assign a value to it
// client = 'customer1'

// console.log(client);
// in one line
// let user = 'user1';

// declaring multiple variables at once
// let cat, dog;
// let cat;
// let dog;

// naming is really important

// variable name can start with a letter, underscore, $
// let 34x; -> ❌

// user camelCase
// let userId;

// variables can be reassigned if the variable is 
// declared with 'let'
// let name = 'jan';
// name = 'katka';
// console.log(name);

// const -> constant
// const age = 36;
// age = 37;

// const password;
// password = '123' -> this does not work ❌

// there are other methods on console besides log()
// console.table(['a', 'b', 'c']);

// whenever you can use const

// Data types

// There are two types: Primitives and Objects

// primitive data types: number, string, boolean, null,
//undefined, symbol

let name = 'joe';
// check the type of a variable with 'typeof'
console.log(typeof name);

name = 34;
console.log(typeof name);


// numbers

const distance = 7000;
const price = 19.99;

console.log('hello' * 3)//  -> NaN - Not a number

console.clear();

// Math operators
const sum = 3 + 6;
console.log(sum)
// addition: +
// subtraction: -
// division: /
// const result = 10 / 2
// console.log(result)
// multiplication: *

// Modulo
console.log(5 % 2)
// Exponentiation -> **
console.log(5 ** 3)
console.clear();
let x = 0;
x = x + 1;
x = x + 1;

x += 1 // -> x++ 
console.log(x)

console.clear();
let y = 1;
// this increments first and then uses it
console.log(y + 1)
console.log(y)

console.clear();

// Strings - a sequence of characters 
// let word = 'hello'; use single or double quotes
// console.log(word)

// const list = 'coffee \n apples \n club mate'
// using backticks you can have multiple lines
const list = `coffee 
apples 
club mate`
console.log(list)

console.clear();

// string properties and methods
// check the length of a string
let word = 'hello';
console.log(word.length)

// accessing characters of a string
console.log(word.charAt(0));

// using the bracket notation 
console.log(word[0])

// get the last char of a string
const lastChar = word[word.length - 1]
console.log(lastChar)

// concatenate strings using the '+' operator
const greeting = word + ' world';
console.log(greeting)

const greetingAsTemplateString = `${word} world`

// indexOf() returns the index for a character in a string
// or - 1 if the char is not in the string
console.log(word.indexOf('l'));
console.log(word.lastIndexOf('l'));


// slice()
// slice returns a substring from a string within 
// a given range
let str = 'helloworld';
const sliced = str.slice(0, 5);
console.log(sliced)

// toUpperCase()
// console.log(str.toUpperCase())
str = str.toUpperCase();
console.log(str) // -> HELLOWORLD

let userName = 'alice';
const upperCased = userName[0].toUpperCase() + userName.slice(1)
// -> Alice
console.log(upperCased)
console.clear()
// boolean, undefined and null

// boolean expression evaluates either to true or false
5 > 3 // -> true
// >= -> larger than or equal
// <= -> less than or equal

// equality operator
// === -> also checks the type / strictly equal
// == -> automatically convert the type for the comparison
if ('5' == 5) {
	console.log('they are equal');
}

// some more logical operators
// || -> the logical or
// true || false -> true

// && -> logical and 
// true && false -> false
// true && true -> true


// check if a number is larger than 10 and even
const num = 12;
if (num > 10 && num % 2 === 0) {
	console.log('the number is larger than 10 and even')
}

// truthy and falsy values
// falsy values: 0, '', null, undefined, NaN  

// Not -> !
// strictly not equal -> !== , not equal -> !=


if (0) {
	console.log('truthy')
}

// null is the intentional absence of a value
// undefined is the unintentional absence of a value

let userObject = null;
console.log(userObject)

console.clear();
// Conditionals and Loops


// const userInput = prompt('what is your name?')
// console.log(userInput);

// const age = Number(prompt('what is your age?'));
// console.log(typeof age);
// if (age >= 18) {
// 	alert('you are allowed to drive');
// } else if (age === 17) {
// 	alert('you can drive with an adult');
// } else {
// 	alert('you are too young to drive');
// }

// const language = prompt('what is your language?');
// // switch case
// switch (language) {
// 	case 'french':
// 		console.log('bonjour');
// 		break;
// 	case 'english':
// 		console.log('hello');
// 		break;
// 	case 'spanish':
// 		console.log('hola');
// 		break;
// 	default:
// 		console.log('non recognized language')
// }

// iterations

// for loop
for (let i = 1; i < 11; i++) {
	console.log(i)
}

// exactly the same with a while loop
// let counter = 1;
// while (counter < 11) {
// 	console.log(counter);
// 	counter++
// }

let password;
while (password !== '123') {
	password = prompt('enter password')
}
// if we reach this line the password is correct 
alert('password is correct 🙀')