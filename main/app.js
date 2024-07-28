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

