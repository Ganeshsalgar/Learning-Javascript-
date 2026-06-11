// primtive value

let name = "Ganesh";

console.log(name.toUpperCase());

// Internally new String("name").toUpperCase();




// Primitive vs Object Wrapper

let a = "Ganesh"
let b = new String("Ganesh");


console.log(typeof a);  // string
console.log(typeof b);  // Object



console.log(a == b); //true
console.log(a === b) // false