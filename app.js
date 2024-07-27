const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

// document.querySelector('.list-item'); // Returns the first element that matches the selector
// document.querySelectorAll('.list-item'); // Returns a NodeList with all elements that match the selector
// document.querySelector('ul li:first-of-type'); // Returns the first li element within a ul element
// const ul = document.querySelector('ul'); // Returns the first ul element
// ul.querySelector('li'); // Returns the first li element within the ul element
const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;

// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}