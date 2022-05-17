/* EVENTS
Events are another part of the DOM and they are what provides the link between 
the web page and user interactions. Every time a user interacts with a web page, 
such as clicking on a link, pressing a key, or moving a mouse, an event occurs 
that our program can detect and then respond to. 

EVENT LISTENERS 
They are like setting a notification to alert you when something happens. 
Instead of the program having to constantly check to see if an event has occurred, 
the event listener will let it know when the event happens, and the program can 
then respond appropriately. This allows the program to continue with other tasks 
while it waits for the event to happen.

The following code can be used to attach an event listener to the document that 
fires when the user clicks anywhere on the page:
*/ 
document.body.addEventListener("click", doSomething);
/* The click event occurs when a user clicks with the mouse, presses the Enter key, 
or taps the screen, making it a very useful all-round event covering many types 
of interaction. */
<p onclick="console.log('You Clicked Me!')">Click Me</p>
/* The recommended way of dealing with events, and the current standard, 
is to use event listeners. The addEventListener() method is called on a node object, 
the node to which the event listener is being applied. For example, this code will 
attach an event listener to the document’s body:*/ 
document.body.addEventListener('click',doSomething);
/* In the next example, we are adding a click event listener to the whole page 
(because the addEventListener method is called without a node reference 
preceding it), and using an anonymous function as the callback: */ 
addEventListener('click', () => alert('you clicked!'));
/* The event object
Whenever an eventhandler is triggered by an event, the callbackfunction is called. 
This function is automatically passed an event object as a parameter that contains
information about the event. 
*/
function doSomething(event) {
    console.log(event.type)//click
}
/* Parameter Naming
The parameter does not have to be called event. 
It can be given any legal variable name, although calling it event can 
make it easier to read the code. Many developers often abbreviate it to just e.
*/

/* The event target
The target property returns a reference to the node that fired the event*/
function doSomething(event) {
    console.log(event.target);
} // => <p id="click">Click On me</p>

/* Mouse events
There are mousedown and mouseup events. these  both occure BEFORE a click event is fired. 
*/ 
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('mousedown', () => console.log("down"));
//there is also doubleclick
clickParagraph.addEventListener('dblclick', highlight);
function highlight(event) {
    event.target.classList.toggle('highlight');
}