// implement filter method 

// function filter(elements, cb) {
//     // Do NOT use .filter, to complete this function.
//     // Similar to `find` but you will return an array of all elements that passed the truth test
//     // Return an empty array if no elements pass the truth test
// }


function filter (elements , cb){
    if(!Array.isArray(elements)){
        throw new TypeError("Expected Array here");
    }

    if(typeof cb !== "function"){
        throw new TypeError("Expected the callback function");
    }


    const length = elements.length;
    const result = [];
    for(let i = 0; i < length; i++){
        if(i in elements){
            if(cb(elements[i] , i , elements)){
                result.push(elements[i]);
            }
        }
    }


    return result;
}



console.log("\n==============================");
console.log("Test 1: Filter Even Numbers");
console.log("==============================");

console.log("=== Native filter ===");
console.log([1, 2, 3, 4, 5].filter((ele) => ele % 2 === 0));

console.log("=== Your filter ===");
console.log(filter([1, 2, 3, 4, 5], (ele) => ele % 2 === 0));



console.log("\n==============================");
console.log("Test 2: No Match");
console.log("==============================");

console.log("=== Native filter ===");
console.log([1, 2, 3].filter((ele) => ele > 10));

console.log("=== Your filter ===");
console.log(filter([1, 2, 3], (ele) => ele > 10));



console.log("\n==============================");
console.log("Test 3: All Match");
console.log("==============================");

console.log("=== Native filter ===");
console.log([1, 2, 3].filter((ele) => ele > 0));

console.log("=== Your filter ===");
console.log(filter([1, 2, 3], (ele) => ele > 0));



console.log("\n==============================");
console.log("Test 4: Callback Arguments");
console.log("==============================");

console.log("=== Native filter ===");

console.log(
    [10, 20].filter((ele, index, array) => {
        console.log(ele, index, array.length);
        return true;
    })
);

console.log("=== Your filter ===");

console.log(
    filter([10, 20], (ele, index, array) => {
        console.log(ele, index, array.length);
        return true;
    })
);



console.log("\n==============================");
console.log("Test 5: Empty Array");
console.log("==============================");

console.log("=== Native filter ===");
console.log([].filter((ele) => ele > 0));

console.log("=== Your filter ===");
console.log(filter([], (ele) => ele > 0));



console.log("\n==============================");
console.log("Test 6: Sparse Array");
console.log("==============================");

const sparseArray = [1, , 3];

console.log("=== Native filter ===");
console.log(sparseArray.filter(() => true));

console.log("=== Your filter ===");
console.log(filter(sparseArray, () => true));



console.log("\n==============================");
console.log("Test 7: Objects");
console.log("==============================");

const users = [
    { id: 1, name: "Ganesh" },
    { id: 2, name: "John" },
    { id: 3, name: "Sam" }
];

console.log("=== Native filter ===");
console.log(users.filter((user) => user.id > 1));

console.log("=== Your filter ===");
console.log(filter(users, (user) => user.id > 1));



console.log("\n==============================");
console.log("Test 8: Invalid Callback");
console.log("==============================");

console.log("=== Your filter ===");

try {
    filter([1, 2, 3], "hello");
} catch (err) {
    console.log(err.message);
}



console.log("\n==============================");
console.log("Test 9: Invalid Array");
console.log("==============================");

console.log("=== Your filter ===");

try {
    filter("hello", () => true);
} catch (err) {
    console.log(err.message);
}



console.log("\n==============================");
console.log("Test 10: Push During Iteration");
console.log("==============================");

const arr1 = [1, 2, 3];

console.log("=== Native filter ===");
console.log(
    arr1.filter((ele, index, array) => {
        if (index === 0) {
            array.push(4);
        }
        return true;
    })
);

const arr2 = [1, 2, 3];

console.log("=== Your filter ===");
console.log(
    filter(arr2, (ele, index, array) => {
        if (index === 0) {
            array.push(4);
        }
        return true;
    })
);