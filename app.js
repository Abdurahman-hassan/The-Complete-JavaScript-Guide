const numbers = [1, 2, 3];
console.log(numbers);

const numbersFrom = Array.from(numbers);
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

