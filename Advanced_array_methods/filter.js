// - Creates a new array
// - Loops through an array
// - Runs a callback function on each value in the array
// - If the callback function returns true, that value is pushed to the new array
// - If the callback function returns false, that value will not be included in the new array
// - the result of the callback will always be evaluated into a boolean

//When You Would Use Filter

// - You want to see how many elements in an array satisfy a certain condition
// - You want to “transform” an array into another array of the same length or smaller length depending on a condition
// - You do not want to modify the existing array you are filtering

let letters = ["a", "b", "c", "b", "c"];
letters.filter(function(value, index, array){
  return value === "b";
});
// ["b", "b"]

let friends = [
    { name: "Amanda" },
    { name: "Tommy" },
    { name: "Nathan" },
    { name: "Pat" }
  ];
  friends.filter(function(value, index, array){
      return value.name.includes("n")
  });
// [{name: "Amanda"},{name: "Nathan"}];

//How Does It Work? Own version
function filter(array, callback){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array)){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

//Using Filter In A Function
function fourOrLessNames(names){
  return names.filter(function(value){
    return value.length <= 4;
  });
}
fourOrLessNames(['Fido', 'Blue', 'Rascal']); // ['Fido', 'Blue']
function onlyInstructors(arr) {
  return arr.filter(function(value) {
    return arr.isInstructor;
  });
}
onlyInstructors([
  { name: "Colt", isInstructor: true },
  { name: "Beth", isInstructor: false },
  { name: "Daniel" }
]); // [{name: "Colt", isInstructor: true}]