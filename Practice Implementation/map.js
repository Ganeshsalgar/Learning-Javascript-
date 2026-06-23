// Implementation of map


// function map(elements, cb) {
//     // Do NOT use .map, to complete this function.
//     // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
//     // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
//     // Return the new array.
// }
const items = [1, 2, 3, 4, 5, 5];

//Original 
const original = items.map((ele) => ele * 2);
console.log(original);

function map(elements , cb){
    if(!Array.isArray(elements)){
        throw new TypeError("Expected the Array");
    }
    if(typeof cb !== "function"){
        throw new TypeError("Expected the Function");
    }
    const length = elements.length;
    const result = new Array(length);

    for(let i = 0; i < length; i++){
        if(i in elements){
            result[i] = (cb(elements[i] , i , elements));
        }
    }
    
    return result;
    
}

console.log("Custom");

const Custom = map(items , ((ele) => ele * 2));
console.log(Custom);




console.log("\nTest 1: Basic Mapping");

console.log("=== Native map ===");
console.log([1, 2, 3].map(x => x * 2));

console.log("=== Custom map ===");
console.log(map([1, 2, 3], x => x * 2));



console.log("\nTest 2: Index Access");

console.log("=== Native map ===");
console.log(["a", "b", "c"].map((ele, index) => `${index}-${ele}`));

console.log("=== Custom map ===");
console.log(map(["a", "b", "c"], (ele, index) => `${index}-${ele}`));


console.log("\nTest 3: Array Argument");

console.log("=== Native map ===");
console.log([1, 2, 3].map((ele, index, arr) => arr.length));

console.log("=== Custom map ===");
console.log(map([1, 2, 3], (ele, index, arr) => arr.length));

console.log("\nTest 4: Empty Array");

console.log("=== Native map ===");
console.log([].map(x => x * 2));

console.log("=== Custom map ===");
console.log(map([], x => x * 2));


console.log("\nTest 5: Objects");

const users = [
    { name: "Ganesh" },
    { name: "John" }
];

console.log("=== Native map ===");
console.log(users.map(user => user.name));

console.log("=== Custom map ===");
console.log(map(users, user => user.name));


console.log("\nTest 7: Push During Iteration");

const arr1 = [1, 2, 3];

console.log("=== Native map ===");
console.log(
    arr1.map((ele, index, arr) => {
        if (index === 0) arr.push(4);
        return ele * 2;
    })
);

const arr2 = [1, 2, 3];

console.log("=== Custom map ===");
console.log(
    map(arr2, (ele, index, arr) => {
        if (index === 0) arr.push(4);
        return ele * 2;
    })
);


console.log("\nTest 8: Return Undefined");

console.log("=== Native map ===");
console.log([1, 2, 3].map(() => undefined));

console.log("=== Custom map ===");
console.log(map([1, 2, 3], () => undefined));

console.log("\nTest 9: Invalid Callback");

console.log("=== Custom map ===");

try {
    map([1, 2, 3], "hello");
} catch (err) {
    console.log(err.message);
}


console.log("\nTest 10: Invalid Array");

console.log("=== Custom map ===");

try {
    map("hello", x => x);
} catch (err) {
    console.log(err.message);
}