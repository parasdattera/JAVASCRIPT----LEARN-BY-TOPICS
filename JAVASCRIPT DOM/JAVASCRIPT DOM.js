/*
The Document Object Model (DOM) is a programming interface for web
documents. It represents the web page as a tree-like structure of objects, where
each object corresponds to an element or attribute in the web page. The DOM
provides a way for JavaScript to interact with and manipulate the elements and
content of a web page.

METHODS TO TARGET DOM ELEMENTS

getElementByld()
getElementsByClassName()
getElementsByTagName()
queryselector() -- it will search and get the element in dom and get it on console
querySelectorAll() -- it will get 


TO MODIFY THE CONTENT OF ELEMENT WE CAN USE

variable_name.innerHTML= 'new_content'


METHODS TO CREATE DOM ELEMENT

createElement()

To use the methods we need to use this js file in html file as external js and we are targeting
index.html

*/

// sample getElementByld()


var get_id_by_IdName= document.getElementById('name');
console.log(get_id_by_IdName);

// sample getElementsByClassName()


var get_class_by_ClassName = document.getElementsByClassName('description')[0];
console.log(get_class_by_ClassName);


// sample getElementsByTagName()

var get_element_by_TagName = document.getElementsByTagName('p');
console.log(get_element_by_TagName);

// sample queryselector()

var get_any_element_by_its_name = document.querySelector('img');
console.log(get_any_element_by_its_name);

// sample querySelectorAll() -- returns node list containgin all matching results

var get_any_element_by_its_name = document.querySelectorAll('p')
console.log(get_any_element_by_its_name);



// sample innerHTML -- dynamically modifying or changing data using js

get_id_by_IdName.innerHTML='PARAS DATTERA';
get_class_by_ClassName.innerHTML='Computer Science Engineer || Full Stack Developer ';



// sample createElement() 

const NewElementSummary= document.createElement('h3');
// giving class to the new element
NewElementSummary.className='summary'
// add content inside the new element -- by creating a text node by using createTextNode()
const node= document.createTextNode("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod non doloremque dolor suscipit? Cupiditate laborum harum asperiores distinctio vel aspernatur, tempora doloribus ipsa nihil quibusdam fuga officiis quae libero consequuntur!")
NewElementSummary.appendChild(node);
console.log(NewElementSummary);
// at this point element is created but it is not added into dom structure or dom tree we can add this element into DOM by adding it into starting of document or ending of the document or any particular position of document

// to add into starting of body of document

const strtingbodyref= document.querySelector('body');
strtingbodyref.prepend(NewElementSummary);




// to add into ending of body of document

const newelementfooter= document.createElement('h2');
newelementfooter.id='foot'
const newnode=document.createTextNode('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate culpa accusamus totam quaerat perspiciatis at inventore nemo, similique magni pariatur tempore voluptatibus provident sint expedita, optio, veniam in nulla beatae.');
newelementfooter.appendChild(newnode);
console.log(newelementfooter);
const edingofbodyref = document.querySelector('body');
edingofbodyref.append(newelementfooter);




// to add into a specific postion  -- by using insertBefore() 

const para = document.createElement('p');
const node1 = document.createTextNode(('this is new paragraph element. '));
para.appendChild(node1);
const element = document.getElementById('name');
const child = document.getElementById('description');
element.insertBefore(para,child);



// remove element by using -- removeChild()

const takingbodyref = document.querySelector('body')  // creating object reference of body
const takingh1ref = document.querySelector('h1');   // creating object reference of h1 element
takingbodyref.removeChild(takingh1ref);