const element = document.getElementById('main');
console.dir(element) // shows HTML element content 
/*We get back a special object called an HTMLElement.
The exact kind of object we get back will depend on what we select (HTMLDivElement vs HTMLParagraphElement)*/

document.getElementsByTagName('li');
document.getElementsByTagName('img')[0]; //Returns HTMLCollection(4) [img, img, img, img]
/*This function returns an HTMLCollection to us!
It looks a lot like an array, and you can access it at a specific index or use a for loop
However, you can not use common methods like push, pop, indexOf or includes */

document.getElementsByClassName('heading');
//Just like getElementsByTagName, we get back a special kind of array called an HTMLCollection.*/

document.querySelector('#main'); //Select by id
document.querySelector('.select-title'); //Select by class
document.querySelector('h2.section-heading'); //Tag + Class selector
document.querySelector('input[type="text"]');
/*querySelector accepts a string which is a valid CSS selector
It returns the first element that matches the CSS selector passed to the function.
Just like getElementById, this function returns a special HTMLElement object to us.*/

document.querySelectorAll('li');
document.querySelectorAll('ul .nav-links');
document.querySelectorAll('body > hr'); //Select non nested hr
document.querySelectorAll(':not(p)'); //Select all that not p
/*It returns all the elements that matches the CSS selector passed to the function.
It looks a lot like an array, and you can access it at a specific index or use a for loop
However, you can not use common methods like push, pop, indexOf or includes*/

//Modifying text
function changeh1() {
  let h1 = document.querySelectorAll("h1");
  for (let x of h1) {
    x.innerText = "Something new!"; //only shows “human-readable” elements.
    //OR
    x.textContent = "Something new!"; //gets the content of all elements, including <script> and <style> elements
  }
}
x.innerHTML //shows all HTML content
x.innerHTML += <p>Something</p> //Doesn't override existing content

//Modifying styling
// HTML file <h1 style="color: black; background-color: red;">Hello everyone!</h1>
const mainHeading = document.querySelector("h1")
mainHeading.style.color //returns color
mainHeading.style.color = "red"
mainHeading.style.backgroundColor = "green"

//Modifying Attributes
// HTML file <input type="text" id="first-name">
const firstInput = document.querySelector("input")
firstInput.getAttribute("type")
firstInput.setAttribute("type", "email")

//Direct attribute access
// HTML file <input type="text" id="first-name">
const firstInput = document.querySelector("input")
firstInput.id // "first-name"
firstInput.id = "full-name" // changes the attribute

// HTML file <input type="text">
const firstInput = document.querySelector("input")
firstInput.value // ""
firstInput.value = "Just added some value!" // changes the attribute


//MANIPULATING CLASSES

  //setAttribute(“class”)
//If you want to access the class attribute you can use getAttribute(“class”) or the className property.
//this works, but will overwrites the previous class
const mainHeading = document.querySelector("h1")
mainHeading.setAttribute("class", "section-heading"); //overrides previous class

  //className
//You can also add a class by reassigning the className property
const mainHeading = document.querySelector("h1")
mainHeading.className += " top-heading" // works, but is prone to bugs

  //classList
//An easier way to interact with classes on an element is to use the .classList method
const mainHeading = document.querySelector("h1")
mainHeading.classList // []
mainHeading.classList.add("top-heading") // ["top-heading"]
mainHeading.classList.remove("top-heading") // []
mainHeading.classList.toggle("top-heading") // true
mainHeading.classList.contains("top-heading") // true

//CHANGING MULTIPLE ELEMENTS
const listItems = document.querySelectorAll("li");
for (let listItem of listItems) {
  listItem.style.color = "red";
}

//WORKING WITH THE DOM

  //Create Elements
//To create an HTML element, we can use the createElement function and pass in the name of the element
//This just makes an empty element, so if we want to add any text, attributes or styling we will have to do that on another line
const newButton = document.createElement("button");
const newUnorderedList = document.createElement("ul");
const newDiv = document.createElement("div");
newDiv.innerText = "a brand new div!"
newDiv.style.color = "tomato"
  
  //Append Elements
//After you create an element, you need to place it in the DOM to see it. You can do this using the append method.
//append is a method that a parent element calls and you pass in the child element that you would like to place inside of the parent element
//append will place the element as the last child in the parent. If you would like the element to be the first child, you can use the prepend method.  
const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "Hello!";//1st  example
ul.append(newLi);//1st example
const boldText = document.createElement("b");
boldText.textContent = "Don't forget the kyes";
newLi.append(boldText);
ul.append(newLi);

ul.prepend(newLi); //Goes to the beginning
document.body.prepend(newLi);//<----------------------------

  //Removing Elements
//If we want to remove elements in the DOM, we can use the handy remove method.
//In order to remove an element, we first need to find it.
//This function can only be called on a single element, so if you need to remove multiple elements you’ll need to call remove multiple times.
const ul = document.querySelector("ul");
ul.remove();

//FINDING ELEMENTS NEAR ANOTHER ELEMENT

  //Accessing a parent element
//If you want to access the parent element of another element, you can use the parentElement method.
const foundDiv = document.querySelector("div")
foundDiv.parentElement // <section></section>

  //Accessing the children of an element
//If you want to access the child elements of another element, you can use the children method.
foundDiv.children // HTMLCollection(2) [p, ul]
foundDiv.firstElementChild // <p>Here is a paragraph inside a div!</p>
foundDiv.lastElementChild // <ul></ul>
document.body.children

  //Accessing the siblings of an element
//If you want to access the previous sibling or next sibling element of another element, you can use the previousElementSibling or nextElementSibling method.
foundDiv.previousElementSibling // <h1>Here is a main heading!</h1>
foundDiv.nextElementSibling // <div>Here is the second div!</div>
foundDiv.nextElementSibling.nextElementSibling


