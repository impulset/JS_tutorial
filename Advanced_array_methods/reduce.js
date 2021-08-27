    //REDUCE

// Whatever is returned from the callback function, becomes the new value of the accumulator!

// !!!!! Returned value will be used as a new accumulator !!!!!!!!!!
// Accepts a callback function and an optional second parameter
// Iterates through an array
// Runs a callback on each value in the array
// The first parameter to the callback is either the first value in the array or the optional second parameter
// The first parameter to the callback is often called “accumulator”
// The returned value from the callback becomes the new value of accumulator
// Let’s Break It Down

let evens = [2,4,6,8,10];

evens.reduce(function(accumulator, nextValue){
  return accumulator + nextValue;
});

/*
  2
  6
  12
  20
  30
*/

//Adding A Second Parameter !!!!!! it will be initialized as an accumulator, can be a variable !!!!!!
let evens1 = [2,4,6,8,10];
evens1.reduce(function(accumulator, nextValue){
  return accumulator + nextValue;
},10);
/*
  12
  16
  22
  30
  40
*/

//Let’s Try Something Else
let names = ['Maya', 'Tammy', 'Angela', 'Alexis'];
names.reduce(function(accumulator, nextValue){
  if(nextValue !== "Colt"){
    return accumulator += ' ' + nextValue;
  }
  return accumulator;
},'My friends are');

/*
  Here is what reduce will build up:

  'My friends are Maya'
  'My friends are Maya Tammy'
  'My friends are Maya Tammy Angela'

  With a final output of:

  'My friends are Maya Tammy Angela Alexis'
*/

//Own version
const nums = [ 20, 30, 50, 12, -2, 45, 99, 19, 22, 85 ];
let total = 0;
for (let num of nums){
  total += num
}
console.log(total)

let min = nums[0];
for (let i = 1; i < nums.length; i++){
  if (nums[i] < min) min = nums[i];
}
console.log(min)

    // Examples
const words = [ 'hello', 'I', 'Love', 'you']
const asd = words.reduce(function(acc, nextValue){
  console.log(acc, nextValue)
  return acc + nextValue;
})
//Returned value will be used as a new accumulator 
const midTermScores = [70,88,93,94,64,62,56]
const minScore = midTermScores.reduce(function(min, nextScore){
  console.log(min, nextScore)
  if (nextScore < min){
    return nextScore;
  }
  return min;
})
const minScore1 = midTermScores.reduce(function(min, nextScore){
  return nextScore < min ? nextScore : min;
})
