// THE DOCUMENT OBJECT MODEL

/* The Document Object Model (DOM) allows you to access elements of a 
web page and enable interaction with the page by adding and removing 
elements, changing the order, content and attributes of elements, 
and even altering how they are styled. 

The Document Object Model, or DOM for short, represents an HTML document 
as a network of connected nodes that form a tree-like structure.
The DOM treats everything on a web page as a node. 
HTML tags, the text inside these tags, even the attributes of a tag 
are all nodes. The HTML tag is the root node, and every other part of 
the document is a child node of this.
*/

/* Getting Elements
 The DOM provides several methods that allow us to access any element 
 on a page. These methods will return a node object or a node list, 
 which is an array- like object. These objects can then be assigned 
 to a variable and be inspected or modified.
*/

// Getting An Element By Its ID
const h1 = document.getElementById('title');

// Get Elements By Their Tag Name
const listItems = document.getElementsByTagName('li');

// Get Elements By Their Class Name
const heroes = document.getElementsByClassName('hero');

/* Query Selectors
The document.querySelector() method allows you to use CSS notation 
to find the first element in the document that matches that matches 
a CSS selector provided as an argument */
/* The document.querySelectorAll() method also uses CSS notation 
but returns a node list of all the elements in the document that 
match the CSS query selector. If no elements match, it will return 
an empty node list. */
const wonderWoman = document.querySelector('li:last-child');
const ul = document.querySelector('ul#roster');
const batman = ul.querySelector('li#bats')

/* jQuery
jQuery is a popular JavaScript framework that makes it 
very easy to find elements on a page using a CSS-style syntax. 
It uses document.querySelectorAll() in the background whenever it can. 
For example, the jQuery code $('ul#roster').find('li#bats'); 
is basically doing the same as our previous example:
const ul = document.querySelector('ul#roster');
ul.querySelector('li#bats') */

/* Navigating the DOM Tree
Node objects have a number of properties and methods for navigating 
around the document tree. Once you have a reference to an element, 
you can walk along the document tree to find other nodes. 

The childNodes property is a list of all the nodes that are children 
of the node concerned. The following example will return all the child 
nodes of the element with an id attribute of roster:
const heroes = document.getElementById('roster');
heroes.childNodes
<< NodeList [#text "
", <li class="hero">, #text "
", <li id="bats">, #text "
", <li class="hero">, #text "
", <li class="hero">, #text "

Note that the childNodes property returns all the nodes that 
are children of an element. This will include any text nodes, 
and since whitespace is treated as a text node, there will 
often be empty text nodes in this collection.
The children property only returns any element nodes that are children 
of that node, so will ignore any text nodes. Note that this is only 
supported in Internet Explorer from version 9 onwards:

heroes.children // this will only contain list items
 << HTMLCollection [<li class="hero">, <li
➥ id="bats">, <li class="hero">, <li ➥ class="hero">] (4)
heroes.children.length
<< 3
*/

//Finding the Value of a Node