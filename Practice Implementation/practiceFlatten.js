




function flatten (element){
    if(!Array.isArray(element)){
        throw new TypeError("Expected the Array here");
    }

    const result = [];

    function helper(arr){
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                helper(arr[i]);
            }
            else{
                result.push(arr[i]);
            }
        }
    }

    helper(element);
    return result;
}

console.log("\n==============================");
console.log("Test 10: Real Interview Test");
console.log("==============================");

const input = [
    1,
    [2],
    [3, [4]],
    [[[[5]]]],
    [6, [7, [8, [9]]]]
];

console.log("Input:");
console.log(input);

console.log("Expected:");
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log("Actual:");
console.log(flatten(input));console.log("\n==============================");
console.log("Test 1: One Level Nested");
console.log("==============================");

console.log("Input:");
console.log([1, [2], [3]]);

console.log("Expected:");
console.log([1, 2, 3]);

console.log("Actual:");
console.log(flatten([1, [2], [3]]));



console.log("\n==============================");
console.log("Test 2: Multiple Levels");
console.log("==============================");

console.log("Input:");
console.log([1, [2], [[3]], [[[4]]]]);

console.log("Expected:");
console.log([1, 2, 3, 4]);

console.log("Actual:");
console.log(flatten([1, [2], [[3]], [[[4]]]]));



console.log("\n==============================");
console.log("Test 3: Deeply Nested");
console.log("==============================");

console.log("Input:");
console.log([[[[[1]]]]]);

console.log("Expected:");
console.log([1]);

console.log("Actual:");
console.log(flatten([[[[[1]]]]]));



console.log("\n==============================");
console.log("Test 4: Already Flat");
console.log("==============================");

console.log("Input:");
console.log([1, 2, 3, 4]);

console.log("Expected:");
console.log([1, 2, 3, 4]);

console.log("Actual:");
console.log(flatten([1, 2, 3, 4]));



console.log("\n==============================");
console.log("Test 5: Empty Array");
console.log("==============================");

console.log("Input:");
console.log([]);

console.log("Expected:");
console.log([]);

console.log("Actual:");
console.log(flatten([]));



console.log("\n==============================");
console.log("Test 6: Mixed Data Types");
console.log("==============================");

console.log("Input:");
console.log([
    1,
    ["Ganesh"],
    [[true]],
    [[[null]]],
    [[[{ age: 23 }]]]
]);

console.log("Expected:");
console.log([
    1,
    "Ganesh",
    true,
    null,
    { age: 23 }
]);

console.log("Actual:");
console.log(
    flatten([
        1,
        ["Ganesh"],
        [[true]],
        [[[null]]],
        [[[{ age: 23 }]]]
    ])
);

