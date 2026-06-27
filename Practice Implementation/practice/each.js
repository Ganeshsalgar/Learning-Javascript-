//implementation of array method 

const items = [1, 2, 3, 4, 5, 5];
// function each(elements, cb) {
//     // Do NOT use forEach to complete this function.
//     // Iterates over a list of elements, yielding each in turn to the `cb` function.
//     // This only needs to work with arrays.
//     // You should also pass the index into `cb` as the second argument
//     // based off http://underscorejs.org/#each
// }


// built - in forEach function

items.forEach((ele) => console.log(ele));

function each (elements , cb){

    if(!Array.isArray(elements)){
        throw new TypeError("Expected the Array here");
    }
     
    if(typeof cb !== "function"){
        throw new TypeError("Expected the function here");
    }

    const length = elements.length

    for(let i = 0; i < length; i++){
        if(i in elements){ // this is check for the property is present into array for not 
            cb(elements[i] , i , elements);
        }
    }
}





console.log("Test 1: Basic Iteration");

console.log("=== Native forEach ===");

[10, 20, 30].forEach((element) => {
    console.log(element);
});

console.log("=== Your each ===");

each([10, 20, 30], (element) => {
    console.log(element);
});

// Test 2: Empty Array
console.log("\nTest 2: Empty Array");

console.log("=== Native forEach ===");
[].forEach((element) => {
    console.log(element);
});

console.log("=== Your each ===");
each([], (element) => {
    console.log(element);
});


// Test 3: Callback Arguments
console.log("\nTest 3: Callback Arguments");

console.log("=== Native forEach ===");
[1, 2].forEach((element, index, array) => {
    console.log(element, index, array.length);
});

console.log("=== Your each ===");
each([1, 2], (element, index, array) => {
    console.log(element, index, array.length);
});



// Test 4: Sparse Array
console.log("\nTest 4: Sparse Array");

const arr1 = [1, , 3];

console.log("=== Native forEach ===");
arr1.forEach((element, index) => {
    console.log(index, element);
});

console.log("=== Your each ===");
each(arr1, (element, index) => {
    console.log(index, element);
});



// Test 5: Push During Iteration
console.log("\nTest 5: Push During Iteration");

const arr2 = [1, 2, 3];

console.log("=== Native forEach ===");
arr2.forEach((element, index) => {
    console.log(element);

    if (index === 0) {
        arr2.push(4);
    }
});

const arr3 = [1, 2, 3];

console.log("=== Your each ===");
each(arr3, (element, index, array) => {
    console.log(element);

    if (index === 0) {
        array.push(4);
    }
});



const obj = {
    name: "Ganesh",
    age: 23
};

each(Object.keys(obj), (key) => {
    console.log(key, obj[key]);
});