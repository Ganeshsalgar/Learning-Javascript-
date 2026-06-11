let a = true;
let b = false;

// Logical AND (&&)
console.log(a && b); // false
console.log(true && true); // true

// Logical OR (||)
console.log(a || b); // true
console.log(false || false); // false

// Logical NOT (!)
console.log(!a); // false
console.log(!b); // true

// Real Example
let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense); // true
console.log(age < 18 || hasLicense);  // true
console.log(!(age < 18));             // true