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
/* !! Using click and doubleclick On The Same Element
You should be very cautious of attaching both a click and doubleclick 
event to the same element. This is because it’s impossible to tell if a
 click is the first click of a doubleclick or just a single click. 
 This means that a doubleclick event will always cause the click event to fire.*/ 

 // The mouseover occurs when a mouse pointer is placed over a element
 const mouseParagraph = document.getElementById('mouse');
 mouseParagraph.addEventListener('mouseover', highlight);

 /* Keyboard events 
 Three events that occur when a user presses a key are: keydown, keypress and keyup. 
 When a user presses a key the event occur in that order. They are not tied to any 
 particular key, although the information a about which key was pressed is a 
 property of the event object. 
 1: the keydown event occurs whe a key is pressed and will continue to occure if
 the key is held down. 
 2: the keypress event occurs after a keydown event but before a keyup event.
 the keypress event only occurs for keys that produce a character input. 
 This means that its the most reliable way to find out the character that was 
 pressed on the keyboard. 
 3: The keyup event occurs when a key is released. 

 !! Its important to distinguish between a physical key and a character that 
 appears on the screen. The keydowns event is the action of pressing a key, 
 whereas the keypress event is the action of a character being typed on the screen. */

 /* Touch Events
 Usually made with a finger, but can also be a stylus*/
 addEventListener('touchend', () => console.log('Touch ➥ stopped'));

 // Removing event listeners
 const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
console.log('Enjoy this while it lasts!');
onceParagraph.style.backgroundColor = 'pink';
onceParagraph.removeEventListener('click',remove);
}
/*This adds a click event listener to a paragraph element, 
but then removes it in the callback function named remove. 
This means it will only be called once (try clicking on it 
again and nothing happens).*/

/* Stopping default behaviour
Some elements have default behavior associated with certain events. 
For example, when a user clicks on a link, the browser redirects to 
the address in the href attribute and a form is submitted when the 
user clicks on the Submit button. */ 
const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
event.preventDefault();
    console.log('Broken Link!');
});