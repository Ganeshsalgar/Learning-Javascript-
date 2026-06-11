// problem not support to the functional scope


// 1. same variable_name declare again
// 2. Not a blockscope


var number = 10;


// functional scope
function checkVar(){
    var name = "Ganesh";
    console.log(name);
    
}

// console.log(name) -> gives error here

// not block scope 
if(true){
    var name = "Sidhhi";
}

var number = 30;
console.log(number);
console.log(name);


// global scope 

var num = 11;

function Value(){
    console.log("Inside function : " , num);
}

if(true){
    console.log("Inside block scope : " + num);
}

console.log("global scope : " , num);

