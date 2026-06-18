
// initionalization
// while(condition){
//     code
//     increment
// }


// let i = 0;

// while(i < 10){
//     console.log(i);
//     i++;
// }


// setTimeout(function (){
//     console.log("Ganesh");
// } , 2000);



// function x (callback) {
//     console.log("x");
//     callback();

// }

// function y (){
//     console.log("y");
// }

// x(y);



// // callback 

function gfd(){
    console.log("Pratik")
}

function abc (callback){
    console.log("Hii , Ganesh");
    // xyz();   //Note : this Hardcore it not change (always running this function)
    callback() // now it running based on function. is passing into it
    console.log("hii , Mahesh" );
}

function xyz(){
    console.log("Hii, Siddhi");
}

// abc(xyz);
abc(gfd)

// // if we want run function dynamically into another function like there we use callback function 


// // interview example:
// function blinkit (){
//     console.log("Order from the blink it  ");
// }


// function zomato (){
//     console.log("Order from zomato :")
// }

// // callback use dynamically function runs inside functions

// function PaymentMethod(callback){
//     console.log("Strat order online");
//     callback();  // calling dynamically to functions that are coming into argrument.
//     // zomato()   // Hardcore calling function this always run (not resuable code)
//     console.log("your ordre getting ready soon :");
// }


// PaymentMethod(zomato); // calling zomato inside paymentMethod
// PaymentMethod(blinkit); //calling blinkit inside paymentMethod




// curring 

function print(a){
    console.log(a);
    return a;
};


let arr = [1 , 2, 3, 4, 5];




