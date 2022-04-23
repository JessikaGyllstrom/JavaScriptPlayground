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