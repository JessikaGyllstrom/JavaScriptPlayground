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

//<li class='hero'>Wonder Woman</li>
const textNode = wonderWoman.firstChild;
textNode.nodeValue;

// Getting and Setting Attributes
//Getting An Element’s Attributes
/*The getAttribute() method returns the value of the 
attribute provided as an argument:*/
wonderWoman.getAttribute('class'); //hero

/*Setting An Element’s Attributes
The setAttribute can change the value of an element’s attributes. 
It takes two arguments: the attribute that you wish to change, 
and the new value of that attribute.
For example, if we wanted to change the class of the element 
in the wonderWoman variable to villain, we could do so using this code:*/
wonderWoman.setAttribute('class', 'villain');
wonderWoman.getAttribute('class');
/* If an element does not have an attribute, the setAttribute method 
can be used to add it to the element. For example, we can add an 
id of amazon to the wonderWoman element: */
wonderWoman.setAttribute('id','amazon');
wonderWoman.getAttribute('id');

/* Dot Notation
The legacy DOM allows access to attributes using dot notation, like so:*/
wonderWoman.id;

/* The classList Property

The classList property is a list of all the classes an element has. 
It has a number of methods that make it easier to modify the class 
of an element. It’s supported in all modern browsers and in Internet
 Explorer from version 10 onwards.
The add method can be used to add a class to an element without 
overwriting any classes that already exist. For example, we could add 
a class of warrior to the wonderWoman element:*/
wonderWoman.classList.add('warrior');
wonderWoman.className;
wonderWoman.classList.remove('warrior');

/*The contains method will check to see if an element has a particular class:*/
wonderWoman.classList.contains('hero');
wonderWoman.classList.contains('villain');

// Creating An Element
/* The document object has a createElement() method that takes a tag name as a
 parameter and returns that element. */
 const flash = document.createElement('li');
 // At the moment, this element is empty. To add some content, we’ll need to create a text node.
 // Creating a Text Node 
 /* A text node can be created using the document.createTextNode() method. 
 It takes a parameter, which is a string containing the text that goes in the node. 
 Let’s create the text to go in our new element: */
 const flashText = document.createTextNode('Flash');
 /* 
Now we have an element node and a text node, but they are not linked together
 ― we need to append the text node to the paragraph node. */

 /* Appending Nodes
 Every node object has an appendChild() method that will add another 
 node (given as an argument) as a child node. We want our newly created 
 text node to be a child node of the list element node. This means that 
 it’s the flash object that calls the method, with flashText as its argument:*/ 
 flash.appendChild(flashText);
 /* Now we have a <li> element that contains the text we want. So the process to follow each time you want to create a new element with text content is this:
1. Create the element node
2. Create the text node
3. Append the text node to the element node
const flashText = document.createTextNode('Flash');*/
flash.appendChild(flashText);
/* This can be made simpler by using the textContent property that every element object has. */

// Creating a text node with document.createTextNode()
const flashTxt = document.createTextNode('Flash');
// Appending nodes with appendChild()
const superhero = document.createElement('li');
superhero.textContent = 'Flash';

// A function to create Elements
function createElement (tag, text) {
    const elemement = document.createElement(tag);
    elemement.textContent = text;
    return elemement;
}
// We can now create new elements in a single line of code rather than three.
const aquaman = createElement('li','Aquaman');

// Adding elements to the page
// the appendChild() adds new element to the bottom of a list
// the insertBefore() will place a new element before
heroes.insertBefore(aquaman,wonderWoman);

// Remove elements with removeChild()
heroes.removeChild(aquaman);

// Replacing Elements with replaceChild()
h1.replaceChild(newText,oldText);

/* The power of the innerHTML property becomes even more apparent 
if you want to insert a large amount of HTML into the document. 
Instead of creating each element and text node individually, 
you can simply enter the raw HTML as a string.*/
heroes.innerHTML = '<li>Harley Quinn</li><li>Deadshot</li><li>KillerCroc</li><li>Enchantress</li><li>CaptainBoomerang</li><li>Katana</li><li>Slipknot</li>';