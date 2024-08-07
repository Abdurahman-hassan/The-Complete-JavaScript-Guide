const numbers = [1, 2, 3];
console.log(numbers);

const numbersFrom = Array.from(numbers); // convert array-like or iterable object to array, then we can use splice, push, pop, etc.
console.log(numbersFrom);

const moreNumbers = new Array('Hi', 'Welcome');
console.log(moreNumbers);

const moreNumbers2 = new Array(5);
for (let i = 0; i < moreNumbers2.length; i++) {
    moreNumbers2[i] = i;
}
console.log(moreNumbers2);

const moreNumbers3 = Array(5, 2);
console.log(moreNumbers3);

const yetMoreNumbers = Array.of(1, 2); // of is better than new Array
console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const name = "Abdelrahman";
const nameArray = Array.from(name);
console.log(nameArray);

const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetail: []}];

const analyticsData = [[1, 1.6], [-5.4, 2.1]];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]);

// push, pop, shift, unshift

const myHobbies = ['Sports', 'Cooking'];
myHobbies.push('Reading');
console.log(myHobbies);
myHobbies.unshift('Coding');
console.log(myHobbies);
const poppedValue = myHobbies.pop();
console.log(`Popped value: ${poppedValue}`);
console.log(myHobbies);
myHobbies.shift();
console.log(myHobbies);
// shift is removing the first element, unshift is adding the first element
// pop is removing the last element, push is adding the last element
// performance wise, shift and unshift are slower than pop and push

hobbies[1] = 'Coding';
hobbies[5] = 'Reading'; // rarely used, there where be 3 empty items between 2 and 5, empty spots are not good
console.log(hobbies, hobbies[4]);



// splice

hobbies.splice(1, 0, 'Good Food');
// delete 0 items, add 'Good Food' at index 1
// we just shift the elements to the right
// if i say 3 instead of 0, it will delete 3 elements starting from index 1
console.log(hobbies);

const removedElements = hobbies.splice(-2, 1);
console.log(hobbies);
