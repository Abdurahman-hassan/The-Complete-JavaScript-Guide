const selectLi = document.getElementById('task-1');
selectLi.style.backgroundColor = 'black';
selectLi.style.color = 'white';

// another way with querySelector
const selectLi2 = document.querySelector('li');
selectLi2.style.backgroundColor = 'black';
selectLi2.style.color = 'red';

// with querySelectorAll
const selectLi3 = document.querySelectorAll('li');
selectLi3[0].style.backgroundColor = 'black';
selectLi3[0].style.color = 'white';

// with li-first
const selectLi4 = document.querySelector('li:first-of-type');
selectLi4.style.backgroundColor = 'black';
selectLi4.style.color = 'green';

// with li-nth-child
const selectLi5 = document.querySelector('li:nth-child(1)');
selectLi5.style.backgroundColor = 'black';
selectLi5.style.color = 'yellow';

// with reference to parent
const selectLi6 = document.querySelector('ol li');
selectLi6.style.backgroundColor = 'black';
selectLi6.style.color = 'orange';

// change the title with 5 different ways
document.title = 'Assignment Solved!1';
document.querySelector('title').textContent = 'Assignment Solved!2';
document.head.querySelector('title').textContent = 'Assignment Solved!3';
document.head.querySelector('title').innerText = 'Assignment Solved!4';
document.head.querySelector('title').innerHTML = 'Assignment Solved!5';

// select the h1 element with 4 different ways
const selectH1 = document.querySelector('h1');
selectH1.style.backgroundColor = 'black';
selectH1.style.color = 'white';

const selectH2 = document.querySelector('body h1');
selectH2.style.backgroundColor = 'black';
selectH2.style.color = 'red';

const selectH3 = document.querySelector('body > h1');
selectH3.style.backgroundColor = 'black';
selectH3.style.color = 'green';

const selectH4 = document.querySelectorAll('h1');
selectH4[0].style.backgroundColor = 'black';
selectH4[0].style.color = 'yellow';
