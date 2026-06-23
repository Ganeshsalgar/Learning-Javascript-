// function reduce(elements, cb, startingValue) {
//     // Do NOT use .reduce to complete this function.
//     // How reduce works: A reduce function combines all elements into a single value going from left to right.
//     // Elements will be passed one by one into `cb` along with the `startingValue`.
//     // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
//     // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
// }

// ⭐ Test 2 → No Initial Value
// ⭐ Test 5 → Empty Array + Initial Value
// ⭐ Test 6 → Empty Array Without Initial Value
// ⭐ Test 7 → Sparse Array
// ⭐ Test 8 → Callback Arguments


const items = [1, 2, 3, 4, 5, 5];
const ans = items.reduce((acc, curr) => (curr > acc ? curr : acc), 0);

console.log(ans);

function reduce(elements, cb, startingValue) {
  if (!Array.isArray(elements)) {
    throw new TypeError("Expected the Array");
  }

  if (typeof cb !== "function") {
    throw new TypeError("Expected the Callback here");
  }

  if (elements.length === 0 && startingValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }
  let accumalator;
  let startIdx;
  if (startingValue === undefined) {
    accumalator = elements[0];
    startIdx = 1;
  } else {
    accumalator = startingValue;
    startIdx = 0;
  }

  const length = elements.length;
  for (let i = startIdx; i < length; i++) {
    if (i in elements) {
      accumalator = cb(accumalator, elements[i], i, elements);
    }
  }

  return accumalator;
}


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
