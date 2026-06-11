// connot reassigned and redeclear
// (Value is needed when we declear it.)
// functional scope
// globla scope 
// block scope 


const name = "Ganesh";

// name = "Siddhi"  not possible

//block scope 
if(true){
    const val  = 12;
    // console.log("Inside : ",val);

}

// console.log("Outside : ", val); not access




///

// console.log(null == 0);/

let a = null;  

// console.log(Number(null)); // 0 (only in some opreators)
// console.log(String(null)); // null
// console.log(Number(undefined)); // NaN




// computer science problem
// with decimal

let d1 = 0.1
let d2 = 0.2;

let c = d1 + d2;

// console.log(c == 0.3); // false

console.log(null == 0);