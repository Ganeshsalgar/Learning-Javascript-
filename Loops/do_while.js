
// let i = 5;

// do{
//     console.log(i);
    
// }  while(i == 10)

    // np TDZ
    // console.log(name);

    var name = "ganesh";


    // TDZ
    // console.log(name1);
    // console.log(name2);


    // let name1 = "ganesh";
    // const name2 = "Siddhi"


//     (function (val){
//         console.log("Ganesh" , val);
//     })(5);


//     let x = 10;
// let y = x;

// y = 20;

// console.log(x); // 10
// console.log(y); // 20



let person = {
  name: "Ganesh",
  age : 23,
  a :{
    aname :"preeti"
  }
};

// let anotherPerson = {...person};

// anotherPerson.a.aname = "John";

// console.log("person :" ,person.a.aname); // John
// console.log("anotherp : " + anotherPerson.a.aname); // john





let arr  = [1 ,2 ,3 , 4 ,5];

// ... spread 

// iterate all element in array give it seperately 
// let [v1 ,v2 , ...ele] = arr;

// function print(ele){
//     console.log(ele);
// }

// print(ele)

// let p = "abc"
// let p1 = p;

// p = "c";

// console.log(p);  // c
// console.log(p1); // abc


let a = new String("cda");
let b = a;


// a = "d"

// console.log(a) // d
// console.log(b); // d


let g = "Ganesh"
let g1 = new String("Ganesh");


console.log(g == g1) // true
console.log(g === g1);  //false




const greet = function sayHello() {
    console.log("Hello");
    sayHello();
};

// greet();
// sayHello();