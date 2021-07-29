// When a ____ event occurs on _____ element, do this ______
//!!!!! event listener only works for elements currently on the page
event.preventDefault();
// Attaching The Name Of The Function
<h1 onclick="runClickHandler()"> Hello World </h1>
function runClickHandler(){
  console.log("You just clicked the h1 element!");
}
//Adding In Javascript
const h1 = document.querySelector("h1");
h1.onclick = function(){
  console.log("You just clicked the h1 element!");
}
//Using addEventListener
const h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
  console.log("You just clicked the h1 element!");
});
  //Examples of addEventListener
  //Waiting For The Dom To Load
    document.addEventListener("DOMContentLoaded", function(){
        // place your code inside here
    })
    document.addEventListener("keypress", function(event) { //listen for a key
      if (event.key === "a") {
        alert("you just pressed the 'a' key!");
      }
    })    
//Accessing The Event Object
//Inside of the callback to addEventListener, we get access to a special object as a parameter - the event object
const h1 = document.querySelector("h1");
h1.addEventListener("click", function(event){ // we can call this parameter whatever we want - event is very common
  console.log(event) // let's take a look!
})
const formElement = document.querySelector("form");
formElement.addEventListener("submit", function(event){
  event.preventDefault();
  console.log(event);
})

//Adding Multiple Event Listeners
/*<ul id="friend-list">
  <li>Michelle <button>Remove</button></li>
  <li>Juan <button>Remove</button></li>
  <li>Emma <button>Remove</button></li>
</ul>*/
const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  });
}

//Adding the listener when we create Element
/*<h1>See your friend list!</h1>
<ul id="friend-list"></ul>
<form>
  <label for="first-name"></label>
  <input type="text" id="first-name" />
  <button>Add a friend!</button>
</form>*/
const form = document.querySelector("form");
const friendList = document.querySelector("#friend-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const newFriendInput = document.querySelector("#first-name");
  const newLi = document.createElement("li");
  const newButton = document.createElement("button");
  newLi.innerText = newFriendInput.value;
  newButton.innerText = "Remove";

  newButton.addEventListener("click", function(event) {
    event.target.parentElement.remove();
  });

  newLi.append(newButton);
  friendList.append(newLi);
  form.reset();
});

//Event delegation
//We attach a single event listener on the parent or delegate element and then if the event happens inside a certain child element, we can access that child element using event.target
friendList.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
}); 

//Removing Event Listeners
  //removeEventListener needs a reference to the name of the function to remove. annonymous functions will not work here!
function alertData(){
  alert("You just clicked a button");
}
for(let button of buttons){
  button.removeEventListener("click", alertData);
}

//Data attributes
  //When creating elements and HTML pages, it’s very common that you might want to add some metadata or additional information about elements
/*<ul id="cars">
  <li data-model="model 3" data-year="2014">Tesla</li>
  <li data-model="crv" data-year="2017">Honda</li>
  <li data-model="focus" data-year="2011">Ford</li>
  <li data-model="prius" data-year="2015">Toyota</li>
</ul>*/
const ul = document.querySelector("ul");
ul.addEventListener("click", function(event) {
  const selectedElement = event.target;
  console.log("see all data attributes", selectedElement.dataset);
  console.log("see one data attribute",selectedElement.getAttribute("data-model"));
  event.target.dataset.sold = "true" //adding new attribute
});
/* <section id="colors">
<button data-hex="#00b894">Mint Leaf</button>
<button data-hex="#00cec9">Robin's Egg Blue</button>
<button data-hex="#ff7675">Pink Glamour</button>
<button data-hex="#6c5ce7">Exodus Fruit</button>
</section> */
const colorsSection = document.querySelector('#colors');
colorsSection.addEventListener('click', function(e) {
	document.body.style.backgroundColor = e.target.dataset.hex;
});


