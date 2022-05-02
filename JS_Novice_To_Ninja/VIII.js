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