let arr = [ 1 ,2 ,3 ];

arr.forEach(function(val, ind, array){
  console.log(val, ind);
});

const colors = [ 'teal', 'cyan', 'peach', 'purple' ]

function yell(val,ind) {
  const caps = val.toUpperCase();
  console.log(`At index ${ind}, ${caps}`)
}
colors.forEach(yell)

//Own version
function forEach(array, callback){
  for(let i = 0; i < array.length; i++){
    callback(array[i], i, array);
  }
}

//An Example
function countZeroes(arr){
  let total = 0;
  arr.forEach(function(val){
    if(val === 0) {
        total++;
    }
  });
  return total;
}
countZeroes([2,4,6]); // 0
countZeroes([0,1,2,0,1]); // 2