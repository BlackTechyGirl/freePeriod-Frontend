// javascript built-in data types: strings,numbers,booleans,arrays and objects.

// let myString = "Hello, world!";
// let myNumber = 42;
// let myBoolean = true;
// let myArray = [1, 2, 3, 4, 5];
// let myObject = {
//     theName: 'Martha',
//     age: 20,
//     city: 'New York'
// };

// let myName = 'Martha';
// let myAge = 20;

// function printNameAndAge(name, age){
//     console.log('My name is and I am ${age} years old');
// }

// printNameAndAge(myName, myAge);

// let num1 = 5;
// let num2 =4;

// let sum = num1+num2;

// console.log(sum);

// function isEven(num){
//     if(num % 2 === 0){
//         return true;
//     }
//     return false;
// }

// console.log(isEven(num1))

// let x = 10;

// if(x > 10){
//     console.log('x is greater than 10');
// }else if(x < 10){
//     console.log('x is less than 10');
// }else{
//     console.log('x is equal to 10')
// }

// conditionals
// function checkGrade(grade){
//     if (grade >= 90){
//         console.log('You got an A!')
//     }else if(grade >= 80){
//         console.log('You got a B!')
//     }else if(grade >= 70){
//         console.log('You got a C.')
//     }else{
//         console.log('You did not pass.')
//     }

// }
// console.log(checkGrade(69))

// loops: for while ans do/while
// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// for ... in: used to iterate over the properties of an object
// const obj = {
//     a: 1, b: 2, c: 3
// };

// for(const key in obj){
//     console.log(`${key}: ${obj[key]}`)
// }

// for... of: used to iterate over iterable objects like arrays and strings
// const arr = [1, 2, 3];

// for(const element of arr){
//     console.log(element);
// }

// function printMultiples(number){
//     for(i=0; i<=100; i++){
//         if(i%number ===0){
//             console.log(i)
//         }
//     }
// }

// printMultiples(8)

// while loop
// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// do while
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i < 10);

// char count in string
// function countChars(str, char){
//     let count =0;
//     for(let i = 0; i<str.length; i++){
//         if(str[i] === char){
//             count++;
//         }
//     }
//     return count;
// console.log(countChars('hello world', 'z'))

// fizzbuzz
// for (let i=1; i<=100; i++){
//     if(i%3 === 0 && i%5 ===0){
//         console.log('FizzBuzz');
//     }else if(i%3 ===0){
//         console.log('Fizz');
//     }else if(i%5 ===0){
//         console.log('Buzz');
//     }else{
//         console.log(i);
//     }
// }

// Rest parameters
// function sum(...numbers){
//     let result = 0;
//     for(let i =0; i <numbers.length; i++){
//         result += numbers[i];
//     }
//     return result
// }

// Arrow functions: often used for writing concise, single-line functions.
// const multiply = (a,b) => a*b;

// Named function
// function square(x){
//     return x*x;
// }

// Anonymous functions: they dont have a name and are often used as arguments to other functions or for event handlers
// const multiply = function(x, y){
//     return x*y;
// }

// Immediately-invoked function expressions(IIFE): these functions are executed as soon as they ar defined, and are often used to create a private scope for your code.
// (function () {
//   const name = "Martha";
//   console.log("Hello, " + name + "!");
// })();

// palindrome checker
// function isPalindrome(str) {
  // Convert string to lowercase and remove non-alphanumeric characters
//   str = str.toLowercase().replace(/[\W_]/g, "");

  // Reverse the string
//   const reversed = str.split("").reverse().join("");

  // Check if the original and reversed strings are equal

  return str === reversed;
// }

// console.log(isPalindrome('mama'))
