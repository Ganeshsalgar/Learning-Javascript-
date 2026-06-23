// implemented the Object.keys 


// function keys(obj) {
//     // Retrieve all the names of the object's properties.
//     // Return the keys as strings in an array.
//     // Based on http://underscorejs.org/#keys
// }

function keys(obj){
    if(obj === null || obj === undefined){
        return [];
    }

    if(typeof obj === 'string'){
        const result = [];

        for(let i = 0; i < obj.length; i++){
            result.push(String(i));
        }


        return result;
    }

    const result = [];

    for(const key in obj){
        if(Object.hasOwn(obj , key)){
            result.push(key);
        }
    }

    return result;
}

// const obj = {
//     name : "Ganesh",
//     age : 24,
//     add : "Pune"
// }

// const arr = "Ganesh"

// const result = Object.keys(arr);
// console.log(result);


// console.log(keys(arr));


console.log("\n==============================");
console.log("Test 1: Simple Object");
console.log("==============================");

const obj1 = {
    name: "Ganesh",
    age: 24,
    city: "Pune"
};

console.log("=== Native Object.keys ===");
console.log(Object.keys(obj1));

console.log("=== Your keys ===");
console.log(keys(obj1));



console.log("\n==============================");
console.log("Test 2: Empty Object");
console.log("==============================");

const obj2 = {};

console.log("=== Native Object.keys ===");
console.log(Object.keys(obj2));

console.log("=== Your keys ===");
console.log(keys(obj2));



console.log("\n==============================");
console.log("Test 3: Array");
console.log("==============================");

const arr = [10, 20, 30];

console.log("=== Native Object.keys ===");
console.log(Object.keys(arr));

console.log("=== Your keys ===");
console.log(keys(arr));



console.log("\n==============================");
console.log("Test 4: Empty Array");
console.log("==============================");

const arr2 = [];

console.log("=== Native Object.keys ===");
console.log(Object.keys(arr2));

console.log("=== Your keys ===");
console.log(keys(arr2));



console.log("\n==============================");
console.log("Test 5: String");
console.log("==============================");

const str = "Ganesh";

console.log("=== Native Object.keys ===");
console.log(Object.keys(str));

console.log("=== Your keys ===");
console.log(keys(str));



console.log("\n==============================");
console.log("Test 6: Empty String");
console.log("==============================");

const str2 = "";

console.log("=== Native Object.keys ===");
console.log(Object.keys(str2));

console.log("=== Your keys ===");
console.log(keys(str2));



console.log("\n==============================");
console.log("Test 7: Number");
console.log("==============================");

console.log("=== Native Object.keys ===");
console.log(Object.keys(100));

console.log("=== Your keys ===");
console.log(keys(100));



console.log("\n==============================");
console.log("Test 8: Boolean");
console.log("==============================");

console.log("=== Native Object.keys ===");
console.log(Object.keys(true));

console.log("=== Your keys ===");
console.log(keys(true));



console.log("\n==============================");
console.log("Test 9: Null");
console.log("==============================");

console.log("=== Your keys ===");

try {
    console.log(keys(null));
} catch (err) {
    console.log(err.message);
}



console.log("\n==============================");
console.log("Test 10: Undefined");
console.log("==============================");

console.log("=== Your keys ===");

try {
    console.log(keys(undefined));
} catch (err) {
    console.log(err.message);
}



console.log("\n==============================");
console.log("Test 11: Inherited Properties");
console.log("==============================");

const parent = {
    city: "Pune"
};

const child = Object.create(parent);

child.name = "Ganesh";
child.age = 24;

console.log("=== Native Object.keys ===");
console.log(Object.keys(child));

console.log("=== Your keys ===");
console.log(keys(child));



console.log("\n==============================");
console.log("Test 12: Nested Object");
console.log("==============================");

const obj3 = {
    user: {
        name: "Ganesh"
    },
    age: 24
};

console.log("=== Native Object.keys ===");
console.log(Object.keys(obj3));

console.log("=== Your keys ===");
console.log(keys(obj3));



console.log("\n==============================");
console.log("Test 13: Function");
console.log("==============================");

function greet() {}

console.log("=== Native Object.keys ===");
console.log(Object.keys(greet));

console.log("=== Your keys ===");
console.log(keys(greet));



console.log("\n==============================");
console.log("Test 14: Real Interview Test");
console.log("==============================");

const employee = {
    id: 101,
    name: "Ganesh",
    department: "Engineering",
    salary: 50000
};

console.log("=== Native Object.keys ===");
console.log(Object.keys(employee));

console.log("=== Your keys ===");
console.log(keys(employee));

