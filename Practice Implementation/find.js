// implement the find method 


// function find(elements, cb) {
//     // Do NOT use .includes, to complete this function.
//     // Look through each value in `elements` and pass each element to `cb`.
//     // If `cb` returns `true` then return that element.
//     // Return `undefined` if no elements pass the truth test.
// }

const items =[1,2,3,4,5,5];

console.log("In-build");

const ans = items.find((ele) => ele == 5);
console.log(ans);




function find (elements , cb ){
    if(!Array.isArray(elements)){
        throw new TypeError("Expected the Array here");
    }

    if(typeof cb !== 'function'){
        throw new TypeError("Expected the callback here");
    }

    const length = elements.length;

    for(let i = 0; i < length; i++){
        // if(i in elements){
            if(cb(elements[i] , i, elements)){
                return elements[i];
            }
        // }
    }

    return undefined;
}

console.log("Custom");
const result = find(items , (ele) => ele == 5);
console.log(result);

console.log("\nTest 1: Find Existing Element");

console.log("=== Native find ===");
console.log(
    [1, 2, 3, 4, 5].find(
        (ele) => ele === 5
    )
);

console.log("=== Your find ===");
console.log(
    find(
        [1, 2, 3, 4, 5],
        (ele) => ele === 5
    )
);

console.log("\nTest 2: Element Not Found");

console.log("=== Native find ===");
console.log(
    [1, 2, 3].find(
        (ele) => ele === 10
    )
);

console.log("=== Your find ===");
console.log(
    find(
        [1, 2, 3],
        (ele) => ele === 10
    )
);

console.log("\nTest 3: First Match");

console.log("=== Native find ===");
console.log(
    [1, 5, 3, 5, 7].find(
        (ele) => ele === 5
    )
);

console.log("=== Your find ===");
console.log(
    find(
        [1, 5, 3, 5, 7],
        (ele) => ele === 5
    )
);

console.log("\nTest 4: Callback Arguments");

console.log("=== Native find ===");

[10, 20].find(
    (ele, index, array) => {
        console.log(ele, index, array.length);
        return false;
    }
);

console.log("=== Your find ===");

find(
    [10, 20],
    (ele, index, array) => {
        console.log(ele, index, array.length);
        return false;
    }
);


console.log("\nTest 5: Empty Array");

console.log("=== Native find ===");
console.log(
    [].find(
        (ele) => ele === 1
    )
);

console.log("=== Your find ===");
console.log(
    find(
        [],
        (ele) => ele === 1
    )
);


console.log("\nTest 6: Sparse Array");

const arr = [1, , 3];

console.log("=== Native find ===");

arr.find((ele, index) => {
    console.log(index, ele);
    return false;
});

console.log("=== Your find ===");

find(arr, (ele, index) => {
    console.log(index, ele);
    return false;
});


console.log("\nTest 7: Find Object");

const users = [
    { id: 1, name: "Ganesh" },
    { id: 2, name: "John" }
];

console.log("=== Native find ===");
console.log(
    users.find(
        (user) => user.id === 2
    )
);

console.log("=== Your find ===");
console.log(
    find(
        users,
        (user) => user.id === 2
    )
);

console.log("\nTest 8: Invalid Callback");

console.log("=== Your find ===");

try {
    find([1, 2, 3], "hello");
} catch (err) {
    console.log(err.message);
}


console.log("\nTest 9: Invalid Array");

console.log("=== Your find ===");

try {
    find("hello", () => true);
} catch (err) {
    console.log(err.message);
}




