// implemented the Object.values(obj); 

// function values(obj) {
//     // Return all of the values of the object's own properties.
//     // Ignore functions
//     // http://underscorejs.org/#values
// }



function values(obj){
    if(obj === null || obj === undefined){
        return [];
    }
    
    if(typeof obj === "string"){
        const result = [];

        for(let i = 0; i < obj.length; i++){
            result.push(String(obj[i]));
        }


        return result;
    }

    const result = [];

    for(const key in obj){
        if(Object.hasOwn(obj , key)){
            
                result.push(obj[key]);
            
        }

    }

    return result;
}
console.log("\n==============================");
console.log("Test 1: Simple Object");
console.log("==============================");

const obj1 = {
    name: "Ganesh",
    age: 24,
    city: "Pune"
};

console.log("=== Native Object.values ===");
console.log(Object.values(obj1));

console.log("=== Your values ===");
console.log(values(obj1));



console.log("\n==============================");
console.log("Test 2: Empty Object");
console.log("==============================");

const obj2 = {};

console.log("=== Native Object.values ===");
console.log(Object.values(obj2));

console.log("=== Your values ===");
console.log(values(obj2));



console.log("\n==============================");
console.log("Test 3: Array");
console.log("==============================");

const arr = [10, 20, 30];

console.log("=== Native Object.values ===");
console.log(Object.values(arr));

console.log("=== Your values ===");
console.log(values(arr));



console.log("\n==============================");
console.log("Test 4: Empty Array");
console.log("==============================");

const arr2 = [];

console.log("=== Native Object.values ===");
console.log(Object.values(arr2));

console.log("=== Your values ===");
console.log(values(arr2));



console.log("\n==============================");
console.log("Test 5: String");
console.log("==============================");

const str = "Ganesh";

console.log("=== Expected ===");
console.log(["G", "a", "n", "e", "s", "h"]);

console.log("=== Your values ===");
console.log(values(str));



console.log("\n==============================");
console.log("Test 6: Empty String");
console.log("==============================");

const str2 = "";

console.log("=== Expected ===");
console.log([]);

console.log("=== Your values ===");
console.log(values(str2));



console.log("\n==============================");
console.log("Test 7: Number");
console.log("==============================");

console.log("=== Native Object.values ===");
console.log(Object.values(100));

console.log("=== Your values ===");
console.log(values(100));



console.log("\n==============================");
console.log("Test 8: Boolean");
console.log("==============================");

console.log("=== Native Object.values ===");
console.log(Object.values(true));

console.log("=== Your values ===");
console.log(values(true));



console.log("\n==============================");
console.log("Test 9: Null");
console.log("==============================");

console.log("=== Your values ===");
console.log(values(null));



console.log("\n==============================");
console.log("Test 10: Undefined");
console.log("==============================");

console.log("=== Your values ===");
console.log(values(undefined));



console.log("\n==============================");
console.log("Test 11: Ignore Functions");
console.log("==============================");

const obj3 = {
    name: "Ganesh",
    age: 24,
    greet() {
        console.log("Hello");
    }
};

console.log("=== Expected ===");
console.log(["Ganesh", 24]);

console.log("=== Your values ===");
console.log(values(obj3));



console.log("\n==============================");
console.log("Test 12: Inherited Properties");
console.log("==============================");

const parent = {
    city: "Pune"
};

const child = Object.create(parent);

child.name = "Ganesh";
child.age = 24;

console.log("=== Expected ===");
console.log(["Ganesh", 24]);

console.log("=== Your values ===");
console.log(values(child));



console.log("\n==============================");
console.log("Test 13: Nested Object");
console.log("==============================");

const obj4 = {
    user: {
        name: "Ganesh"
    },
    age: 24
};

console.log("=== Native Object.values ===");
console.log(Object.values(obj4));

console.log("=== Your values ===");
console.log(values(obj4));



console.log("\n==============================");
console.log("Test 14: Mixed Data Types");
console.log("==============================");

const obj5 = {
    name: "Ganesh",
    age: 24,
    isActive: true,
    score: null,
    skills: ["JS", "React"]
};

console.log("=== Native Object.values ===");
console.log(Object.values(obj5));

console.log("=== Your values ===");
console.log(values(obj5));



console.log("\n==============================");
console.log("Test 15: Real Interview Test");
console.log("==============================");

const employee = {
    id: 101,
    name: "Ganesh",
    department: "Engineering",
    salary: 50000,
    printSalary() {
        console.log(this.salary);
    }
};

console.log("=== Expected ===");
console.log(Object.values(employee));

console.log("=== Your values ===");
console.log(values(employee));