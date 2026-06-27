

function reduce(elements, cb , startValue){
    if(!Array.isArray(elements)){
        throw new TypeError("Expected the Array");
    }    
    if(typeof cb !== "function"){
        throw new TypeError("Expected the Array");
    }
    // array length is zero
    if(elements.length === 0 && startValue === undefined){
        throw new TypeError("Array is Empty");
    }
    let accumalator;
    let startIdx;

    if(startValue === undefined){
        accumalator = elements[0];
        startIdx = 1;
    }else{
        accumalator = startValue;
        startIdx = 0;
    }

    const length = elements.length;

    for(let i = startIdx; i < length; i++){
        if(i in elements){
            accumalator = cb(accumalator , elements[i], i , elements);
        }
    }

    return accumalator;
}

// const ans = reduce([1,2,3,4,5,4,3,2,1], (acc, curr) => acc + curr, 0);
// console.log(ans);

console.log("\nTest 1: Sum Numbers");

console.log("=== Native reduce ===");
console.log(
    [1, 2, 3, 4].reduce(
        (acc, curr) => acc + curr,
        0
    )
);

console.log("=== Your reduce ===");
console.log(
    reduce(
        [1, 2, 3, 4],
        (acc, curr) => acc + curr,
        0
    )
);


console.log("\nTest 2: No Initial Value");

console.log("=== Native reduce ===");
console.log(
    [1, 2, 3, 4].reduce(
        (acc, curr) => acc + curr
    )
);

console.log("=== Your reduce ===");
console.log(
    reduce(
        [1, 2, 3, 4],
        (acc, curr) => acc + curr
    )
);

console.log("\nTest 3: Maximum");

console.log("=== Native reduce ===");
console.log(
    [1, 5, 3, 9, 2].reduce(
        (acc, curr) => curr > acc ? curr : acc,
        0
    )
);

console.log("=== Your reduce ===");
console.log(
    reduce(
        [1, 5, 3, 9, 2],
        (acc, curr) => curr > acc ? curr : acc,
        0
    )
);

console.log("\nTest 4: String");

console.log("=== Native reduce ===");
console.log(
    ["G", "A", "N"].reduce(
        (acc, curr) => acc + curr,
        ""
    )
);

console.log("=== Your reduce ===");
console.log(
    reduce(
        ["G", "A", "N"],
        (acc, curr) => acc + curr,
        ""
    )
);
console.log("\nTest 5: Empty Array With Initial Value");

console.log("=== Native reduce ===");
console.log(
    [].reduce(
        (acc, curr) => acc + curr,
        100
    )
);

console.log("=== Your reduce ===");
console.log(
    reduce(
        [],
        (acc, curr) => acc + curr,
        100
    )
);

console.log("\nTest 6: Empty Array Without Initial Value");

console.log("=== Native reduce ===");

try {
    [].reduce((acc, curr) => acc + curr);
} catch (err) {
    console.log(err.name);
}

console.log("=== Your reduce ===");

try {
    reduce([], (acc, curr) => acc + curr);
} catch (err) {
    console.log(err.name);
}


console.log("\nTest 7: Sparse Array");

const arr = [1, , 3, , 5];

console.log("=== Native reduce ===");
console.log(
    arr.reduce(
        (acc, curr) => acc + curr,
        0
    )
);

console.log("=== Your reduce ===");
console.log(
    reduce(
        arr,
        (acc, curr) => acc + curr,
        0
    )
);
console.log("\nTest 8: Callback Arguments");

console.log("=== Native reduce ===");

[10, 20].reduce(
    (acc, curr, index, array) => {
        console.log(acc, curr, index, array.length);
        return acc + curr;
    },
    0
);

console.log("=== Your reduce ===");

reduce(
    [10, 20],
    (acc, curr, index, array) => {
        console.log(acc, curr, index, array.length);
        return acc + curr;
    },
    0
);