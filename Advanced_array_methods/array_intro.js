function holler(){
  return console.log("Hey")
}

const whisper = function(){
  console.log("Psst")
}

function add(x,y){
  return x + y;
}
function subtract(x,y){
  return x - y;
}
function multiply(x,y){
  return x * y;
}
function devide(x,y){
  return x / y;
}

const mathFuncs = [ add, subtract, multiply, devide ];

function doMath(a,b,mathFunc){
  return mathFunc(a,b);
}

doMath(3,5, function(a,b){
  console.log(a ** b);
})

function doAllMath(a,b,mathFuncs) {
  for (let func of mathFuncs){
    console.log(func(a,b))
  }
}