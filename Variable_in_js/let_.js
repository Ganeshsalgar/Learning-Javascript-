// Introduced into ES6 which is solved the problem
 
// global scope:

let name = "Ganesh";

function abc() {
    name = "Mahesh";  //change the global
    console.log("Inside : " ,name);
}

abc();
console.log("Outside : " ,name);


//functional scope

 name1 = "Ganesh";

function abc() {
    name1 = "Mahesh";  //change the global
    console.log("Inside : " ,name1);

    let age = 23;
    console.log("Inside : " ,age);   
}

abc();

// console.log(age);  gives error
console.log("Outside : " ,name);


// block scope 

let game = "football";

if(true){
    game = "Cricket"

    let score = 50;
    console.log("Inside : " , score);


}

// console.log("Outside : " , score); // not access





