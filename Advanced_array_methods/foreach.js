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