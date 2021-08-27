    //Find

// Iterates through an array
// Runs a callback on each value in the array
// If the callback returns true at any point, return the value in the array that we’re iterating over
// Otherwise, return undefined

// An Example

let arr = [1,2,3];
arr.find(function(value, index, array){
  return value === 2;
});
// 2
let arr1 = [1,2,3];
arr1.find(function(value, index, array){
  return value < 1;
});
// undefined

//How Does It Work? Own version
function find(array, callback){
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array) === true){
      return array[i]
    }
  }
}

//Using Find In A Function
function findOddNumber(arr2){
  return arr2.find(function(value){
    return value % 2 !== 0
  });
}
findOddNumber([2,3,4,5]) // 3
findOddNumber([4,6,8,10]) // undefined
function ensureNoSubArrays(arr){
  return arr.find(Array.isArray) === undefined
}
ensureNoSubArrays([1, 2, [3,4]]); // false
ensureNoSubArrays([1,2,3,4]); // true

     //findIndex

// Iterates through an array
// Runs a callback on each value in the array
// If the callback returns true for any single value, return the index at which that value is found
// Otherwise, return -1

//An Example

let arr3 = [1,2,3];
arr3.findIndex(function(value, index, array){
  return value < 2;
}); // 0

let arr4 = [1,2,3];
arr4.findIndex(function(value, index, array){
  return value > 3;
}); // -1

//How Does It Work? Own function
function findIndex(array, callback){
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array) === true){
      return i;
    }
  }
  return -1;
}

//Using Findindex In A Function
function findPositionOfBoolean(list){
  return list.findIndex(function(value, index, array){
    return typeof value === "boolean"
  });
}
findPositionOfBoolean([1,3,false,true]) // 2
findPositionOfBoolean(["no booleans", "around", "these parts"]) // -1