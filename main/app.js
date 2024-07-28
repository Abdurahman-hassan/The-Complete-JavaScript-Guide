const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';
h1.className = 'oldTitle';
// h1.className // Contains the class attribute of the element
// h1.id // Contains the id attribute of the element
// h1.style // Contains the style attribute of the element
// h1.className = 'title'; // Sets the class attribute of the element
// h1.setAttribute('class', 'title'); // Sets the class attribute of the element
// h1.className // oldTitle
// h1.className = h1.getAttribute('class') + ' title'; // Adds the class 'title' to the class attribute
// h1.className // oldTitle title


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

// summary of the DOM
// document.body => Selects the <body> element node.
//
// document.head => Selects the <head> element node.
//
// document.documentElement => Selects the <html> element node.


// ---
//
// QUERY METHODS
//
// ---
//
// document.querySelector(<CSS selector>);
// Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns the first (!) matching element in the DOM. Returns null if no matching element could be found.
//
// More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//
// document.getElementById(<ID>);
// Takes an ID (without #, just the id name) and returns the element that has this id. Since the same ID shouldn't occur more than once on your page, it'll always return exactly that one element. Returns null if no element with the specified ID could be found.
//
// More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
//
// document.querySelectorAll(<CSS selector>);
// Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns all matching elements in the DOM as a static (non-live) NodeList. Returns and empty NodeList if no matching element could be found.
//
// More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
//
// document.getElementsByClassName(<CSS CLASS>);
// Takes a CSS class g (e.g. 'some-class') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.
//
// More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
//
// document.getElementsByTagName(<HTML TAG>);
// Takes an HTML tag (e.g. 'p') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.
//
// More information: https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
//
// There also is the getElementsByName() method which really isn't used commonly (https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName).


// properties vs attributes
// properties: value, checked, selected, etc.
// attributes: type, id, href, etc.
// properties are always up-to-date
// attributes are the initial values
// tell me more about properties and attributes
// https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes
// https://javascript.info/dom-attributes-and-properties

// attributes is html attributes that are defined in the html tag
// properties are the properties of the element object in the DOM



// traverse the DOM in order to select the second list item
const ul = document.querySelector('ul');
console.log(ul.children[1]);

// children vs childNodes
// children: only elements
// childNodes: elements and text nodes
console.log(ul.childNodes); // NodeList(7)[text, li.list-item, text, li.list-item, text, li.list-item, text]
console.log(ul.children); // HTMLCollection(3)[li.list-item, li.list-item, li.list-item]

// in order to see the text nodes with css attributes
// ul style="white-space: pre;"

// firstElementChild vs firstChild
// firstElementChild: first element
// firstChild: first node
console.log(ul.firstChild); // #text
console.log(ul.firstElementChild); // <li class="list-item">...</li>
console.log(ul.lastChild); // #text
console.log(ul.lastElementChild); // <li class="list-item">...</li>

// parentElement vs parentNode
// parentElement: parent element
// parentNode: parent node
console.log(ul.parentElement); // <body>...</body>
console.log(ul.parentNode); // <body>...</body>
// it's the same for the first and last child
console.log(ul.firstElementChild.parentElement); // <ul>...</ul>
console.log(ul.firstElementChild.parentNode); // <ul>...</ul>
// there is one exception
console.log(document.body.parentElement); // null
console.log(document.body.parentNode); // #document
console.log(document.documentElement.parentElement); // #null
console.log(document.documentElement.parentNode); // #document
// but it's not really matter because the document is the root of the DOM tree

// closest
// closest: closest parent element that matches the selector
console.log(ul.closest('body')); // <body>...</body>

// previousElementSibling vs previousSibling
// previousElementSibling: previous element
// previousSibling: previous node
console.log(ul.previousElementSibling); // <h1 id="main-title" class="title">...</h1>
console.log(ul.previousSibling); // #text
// if the elements under the same parent
// for example
// <ul>
//   <li>...</li>
//   <li>...</li>
//   <li>...</li>
// </ul>
// ul.firstElementChild.nextElementSibling // <li>...</li>
// ul.firstElementChild.nextSibling // #text
// ul.firstElementChild.nextElementSibling.nextElementSibling // <li>...</li>
// ul.firstElementChild.nextSibling.nextSibling // #text
// ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling // <li>...</li>
// ul.firstElementChild.nextSibling.nextSibling.nextSibling // null

// previousElementSibling vs previousSibling
// previousElementSibling: previous element
// previousSibling: previous node
console.log(ul.nextElementSibling); // null
console.log(ul.nextSibling); // #text
// if the elements under the same parent
// for example
// <header> ... </header>
// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul>
// <footer> ... </footer>
// ul.nextElementSibling // <footer> ... </footer>
// ul.previousElementSibling // <header> ... </header>

// const ul = document.body.firstElementChild.nextElementSibling;
// const firstLi = ul.firstElementChild;
// console.log(firstLi); // <li class="list-item">...</li>
// but if we add another element accidentally it will an issue
// because we are assuming that the first element is the first li element
// so it's better to use the querySelector