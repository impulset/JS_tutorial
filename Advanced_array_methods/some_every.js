          //SOME
// Iterates through an array
// Runs a callback on each value in the array
// If the callback returns true for at least one single value, return true
// Otherwise, return false
// the result of the callback will always be a boolean

let numbers = [1,2,3];
numbers.some(function(value, index, array){
  return value < 3;
});
// true
let numbers1 = [1,2,3];
numbers1.some(function(value, index, array){
  return value > 10;
});
// false

//How Does It Work? Own version
function mySome(array, callback){
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array) === true){
      return true;
    }
  }
  return false;
}

//Using Some In A Function
function hasAdmin(arr){
  return arr.some(function(value){
    return value.admin
  });
}
hasAdmin([
  {name: "Colt", admin: true},
  {name: "Poppy", admin: false}
]); // true
hasAdmin([{name: "Colt"}, {name: "Poppy", admin: false}]); // false

function hasQuestionMark(str){
    return str.split('').some(function(value){
      return value === '?';
    });
  }
  hasQuestionMark('How are you feeling'); // false
  hasQuestionMark('How are you feeling now?'); // true
//

       //EVERY
// Iterates through an array
// Runs a callback on each value in the array
// If the callback returns false for any single value, return false
// Otherwise, return true
// the result of the callback will always be a boolean

//An Example
let numbers2 = [1,2,3];
numbers2.every(function(value, index, array){
  return value > 0;
});
// true
let numbers3 = [1,2,3];
numbers3.every(function(value, index, array){
  return value > 2;
});
// false

//How Does It Work? Own version
function every(array, callback){
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array) === false){
      return false;
    }
  }
  return true;
}

//Using Every In A Function
function allVowels(str){
  return str.split('').every(function(value){
    return "aeiou".includes(value)
  });
}
allVowels('awesome') // false
allVowels('aiaieoeoiu') // true
function allIntegers(arr){
  return arr.every(Number.isInteger);
}
allIntegers([1,2,3,4,4,4,4]) // true
allIntegers([5,1,4,3,2.2]) // false