// let name = 'Max';

// if (name === 'Max') {
//   let hobbies = ['Sports', 'Cooking'];
//   console.log(hobbies);

// }

// function greet() {
//   let age = 30;
//   let name = 'Manuel';
//   console.log(name, age, hobbies);
// }

// console.log(name, hobbies);

// greet();
// ********************************************************************************************************************
// 'use strict';
//
// const userName = 'Max';
// var undefined = 5;
//
// console.log(userName);

let name = 'Max';
// name -> Max
let anotherName = name;
// anotherName -> Max
// name = 'Manuel';
// anotherName -> Max
// we copy by value

let hobbies = ['Sports', 'Cooking'];
// hobbies -> [Sports, Cooking]
let moreHobbies = hobbies;
// moreHobbies -> [Sports, Cooking]
// hobbies.push('Programming');
// moreHobbies -> [Sports, Cooking, Programming]
// we copy by reference

let person = {age: 30};
// person -> {age: 30}
let secondPerson = person;
// secondPerson -> {age: 30}
// person.age = 31;
// secondPerson -> {age: 31}
// we copy by reference

// if we need to copy by value we can use the spread operator
let thirdPerson = {...person};
// thirdPerson -> {age: 31}
person.age = 32;
// thirdPerson -> {age: 31}
// we copy by value

let hobbies_list = ['Sports', 'Cooking'];
let moreHobbies_list = [...hobbies_list];
hobbies_list.push('Programming');
console.log(hobbies_list); // -> [Sports, Cooking, Programming]
console.log(moreHobbies_list); // -> [Sports, Cooking]
// ********************************************************************************************************************

const person1 = {age:30};
const person2 = {age:30};
// person1 === person2; // -> false
// ********************************************************************************************************************