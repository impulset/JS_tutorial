//Destructuring + Spread
const userData = {
  username: 'smith',
  id: 12345,
  password: 'fiddlesticks',
  firstName: 'Angela',
  lastName: 'Smith',
  age: 'guess',
  isLegit: undefined
};

// extract the password key; collect the rest in 'user'
const { password, ...user } = userData;

console.log(user);
/*
{
  username: 'smith',
  id: 12345,
  firstName: 'Angela',
  lastName: 'Smith',
  age: 'guess',
  isLegit: undefined
}
*/

//Renaming with destructuring
const instructorData = {
  name: "Colt",
  job: "Instructor"
}

const { name: instructorName, job: occupation } = instructorData;

instructorName // "Colt"
occupation // "Instructor"

//Defaults with destructuring
const options = {
  refreshTime: 200
}
const { refreshTime = 750, waitTime = 1000 } = options;
console.log(refreshTime); // 200 - initialized in options
console.log(waitTime); // 1000 - fallback to default

const order = {
  variety: "green tea",
  teaName: "silver needle",
  origin: "Taiwan",
  price: 12.99,
  hasCaffeine: true
}

function checkout(tea) {
  const { quantity = 1, price } = tea;
  return quantity * price
}

//Destructuring nested objects
const instructor = {
  id: 44,
  name1: 'Colt',
  isHilarious: true,
  funFacts: {
    favoriteFood: 'Burrito',
    favoriteDrink: 'Old Fashioned',
  }
};
const { funFacts: { favoriteFood, favoriteDrink } } = instructor;
console.log(favoriteFood); // 'Burrito'

//Destructuring functions
//We can use destructuring to extract key/value pairs from an object into variables.
    //old way
function makeInstructor(settings) {
  let name = settings.name;
  let age = settings.age;
}


//We’re going to assume the function is passed an object with a key of name and age
function myFunc({ name1, age1 }) {
  let name = name1;
  let age = age1;
}

//But what happens if the object does not contain a key of name or age?

//We can use default parameters!

function myFunc({ name = "Xie", age = 38 }) {
  let name1 = name;
  let age1 = age;
}

//You Can Apply The Same Concept To Arrays!

const myFavoriteThings = ['teaching', 'music',
  'hiking', 'dank memes', 'singing'];

const [first, second, , ...others] = myFavoriteThings;

console.log(first);   // 'teaching'
console.log(second);  // 'music'
console.log(others);  // ['hiking', 'dank memes']

//Fancy 1-Line Array Value Swap
let a = 1;
let b = 3;

[a, b] = [b, a];

console.log(a); // 3
console.log(b); // 1