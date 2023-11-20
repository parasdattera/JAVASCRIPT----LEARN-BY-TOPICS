/*

An event listener is a function in JavaScript that waits for an event to occur then responds to it.

https://webdesign.tutsplus.com/javascript-cheatsheet-event-listeners-and-dom-manipulation--cms-107006a


*/

// first of all we dont need to write any code into html file for event handling through event listeners , we need to caputre dom element first and by using keyword        ------->                      addEventListener('event_name',function)

//mouse events
// const box1 = document.getElementById('box-1') // accessing box-1 by its id
// box1.addEventListener('click',()=>{            
//     console.log('click by event')
// })

// it is recommended to use event listeners rather then event handlers because when using same function in same dom element and using event handlers then one function will override other so that only 1 time function will work

// just remove on from the names of event handlers and they become event listeners

// in event listeners we have event object also which have all information regarding event object


const box2 = document.getElementById('box-2') // accessing box-2 by its id
box2.addEventListener('click',(e)=>{            
    console.log('event object',e)
})

const box3 = document.getElementById('box-3')
box3.addEventListener('mousemove',(e)=>{
    console.log('event object',e.clientX,e.clientY)
})



// keyboard events
const nameinput=document.getElementById('nameInput')
nameinput.addEventListener('keypress',(e)=>{
    console.log('key',e.key);
})


nameinput.addEventListener('keydown',(e)=>{
    console.log('key',e.key);
})

nameinput.addEventListener('focus',(e)=>{
    console.log('key',e);
})


/*
BUBBLING AND CAPTURING

There are two ways of event propagation in the HTML DOM, bubbling and capturing.
Event propagation is a way of defining the element order when an event occurs.

In bubbling the innermost element's event is handled first and then the outer.
In capturing the outermost element's event is handled first and then the inner.

With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:


addEventListener(event, function, useCapture);
addEventListener(event, function, True); -- to use capture by default it is set to false which means bubbling way of event propagation is getting used.

*/


// sample for BUBBLING AND CAPTURING

// div(parent element) - box1(child element) 

// box1 event
const box1 = document.getElementById('box-1') // accessing box-1 by its id
box1.addEventListener('click',()=>{            
    console.log('clicked on box')
})

// div event
// const container = document.getElementById('container')
// container.addEventListener('click',()=>{
//     console.log('clicked on container')
// })

// as by default bubbling is active thats why first box1 event will triggered and after that div event will be triggered

// set third parametere useCapture true so that captureing behavior will be activated


// div event
const container1 = document.getElementById('container')
container.addEventListener('click',()=>{
    console.log('clicked on container')
},true)

// now div event will triggered first