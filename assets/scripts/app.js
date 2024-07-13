// let username = 'John Doe';
// username = 'Abdo';
// console.log(username);


// const totalUsers = 100;
// totalUsers = 101;
// console.log(totalUsers); // Error: Assignment to constant variable.

// naming convention
// let user_name = 'John Doe'; // snake_case (not recommended)
// let userName = 'John Doe'; // camelCase (recommended)
// start with a letter, underscore, or dollar sign
// let $userName = 'John Doe';
// let _userName = 'John Doe';
const defaultResult = 0; // we can declare a variable without assigning a value to it.
let currentResult = defaultResult;
currentResult += 10;

// let calculationDescription = "'(' + currentResult + ' + 10) * 3 / 2 - 1'";
let calculationDescription = `(${currentResult}+ 10) * 3 / 2 - 1`;

let errorMessage = 'An error \n' + 'occurred!';
let errorMessage2 =`An error

                    occurred!`; // multi-line string we can add pre value in white space key in css to make it work

currentResult = add(1, 2);
outputResult(currentResult, errorMessage);


function add(num1, num2) {
    return num1 + num2;
}
