# Learning JavaScript Notes

## What is Node.js

### Definition

Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser, enabling developers to build server-side and backend applications.

### Characteristics

1. Node.js is open-source and cross-platform.
2. Built on Google's V8 JavaScript engine.
3. Enables JavaScript to run on servers.
4. Supports event-driven, non-blocking I/O.
5. Used to build scalable backend applications.

---

---

### NVM - Node Version Manager
- Used to manage multiple Node.js versions.
- Manage the output of `node --version`.
- Allows you to install, switch, and uninstall Node.js versions.

Example:
```bash
nvm install 22
nvm use 22
node --version
```

### NPM - Node Package Manager
- Used to install and manage Node.js packages.
- Comes bundled with Node.js.

Example:
```bash
npm install express
npm install lodash
```

### NPX - Node Package Executor
- Used to execute packages without installing them globally.
- Downloads the package (if needed) and runs it immediately.

Example:
```bash
npx create-react-app my-app
npx cowsay "Hello World"
```

---

## What is JavaScript?

### Definition

JavaScript is a high-level, dynamically typed programming language used to build interactive web applications. It runs in web browsers and can also run on servers using Node.js.

JavaScript is single-threaded and synchronous by default, but it supports asynchronous behavior through browser Web APIs, callbacks, Promises, and async/await.

### Characteristics

1. High-level language.
2. Dynamically typed.
3. Interpreted/JIT-compiled.
4. Single-threaded.
5. Prototype-based.
6. Supports both synchronous and asynchronous programming.
7. Runs in browsers and server environments.

---

### Synchronous 
The tasks executed one after another and each task waits for the previous task to complete.

### Asychronous

Task executes independently wihout blocking the **Main thread** allowing other code to run while waiting for long operations.

---

# Data Types

JavaScript data types are divided into two categories:

1. Primitive Data Types
2. Non-Primitive (Reference) Data Types

---

## Primitive Data Types

### Definition

A primitive data type is an immutable, single-value data type whose value is stored directly in the variable.

JavaScript has seven primitive data types:

- String
- Number
- BigInt
- Boolean
- Undefined
- Null
- Symbol

### Characteristics

1. Stores a single value.
2. Immutable (cannot be modified after creation).
3. Compared by value.
4. Assignment creates a copy of the value.
5. Stored directly in the variable.
6. Methods work through temporary object wrappers.

### Example

```javascript
let a = "Hello";
let b = a;

b = "World";

console.log(a); // Hello
console.log(b); // World
```

---

## Non-Primitive (Reference) Data Types

### Definition

A non-primitive data type is a mutable, object-based data type that can store collections of data and behavior.

Examples include:

- Object
- Array
- Function
- Date
- Map
- Set
- RegExp

### Characteristics

1. Mutable.
2. Stored as objects.
3. Compared by reference.
4. Variables store references (addresses) to objects.
5. Can contain properties and methods.
6. Assignment copies the reference, not the actual object.

### Example

```javascript
let obj1 = {
  name: "Ganesh"
};

let obj2 = obj1;

obj2.name = "John";

console.log(obj1.name); // John
console.log(obj2.name); // John
```

---

## Important Note: JavaScript Pass-by-Value

JavaScript is always pass-by-value.

### Primitive Example

```javascript
let x = 10;
let y = x;

y = 20;

console.log(x); // 10
console.log(y); // 20
```

A copy of the value is passed.

### Object Example

```javascript
let person = {
  name: "Ganesh"
};

let anotherPerson = person;

anotherPerson.name = "John";

console.log(person.name); // John
```

A copy of the reference is passed. Both variables point to the same object.

### Interview Line

> JavaScript is always pass-by-value. For primitive values, the actual value is copied. For objects, the value being copied is the reference (memory address) to the object.

### Important Correction

Immutable (cannot create copy)

Immutable (cannot be modified after creation, but copies can be created)

### Example

```javascript
let str = "Hello";
let newStr = str + " World";

console.log(str); // Hello
console.log(newStr); // Hello World
```

The original string is not modified; a new string is created.


---

## pass by value 
Pass by value is passes the copy the indepentent value to function.


## pass by reference 

Pass the reference send the original value of it allow the function to modify data.


---
## Object Wrappers

Object wrapper is the speacial object, that automatically create automatically created around the **primitive values** to provide the **Method and Properties**.

### Example 
```javascript
  let name = "Ganesh";

  console.log(name.toUpperCase());   // Internally new String("name").toUpperCase();

  let a = "hello";
let b = new String("hello");

console.log(typeof a); // string
console.log(typeof b); // object

console.log(a == b);  // true
console.log(a === b); // false

```
Note : They allow primitives to use methods and properties.


--- 

## Module

It is exprot the all functionality with encapsulated way to use in a different file.

```javascript

// filename: add.js
function add (a , b){
  return a + b;
}

module.export add; 

//anther filename: demo.js

let a = 5;
let b = 5;

let result = add(a , b);
```

---

## Utility Method

Method - A method is a **function that belongs to an object** and is used to perform an operation on that object.


### Utility Method - ***'console.log()'***
A  **'console.log()'** is a Method Provided by the Browser or Node.js terminal , **Not by javascript language** 

Internally What happends :

When we execute, the javascript engine resolve the console object, call the native **log** function, converts the argument into a printable format, and send the output to the browser's development console or node.js. 

The function call is managed through the call stack like other method function call.

---

# Variable

Variable is named memory location used to access the data that can be modified.

Note : We can store any thing inside the varible into javascript. 

Example : Number, String, Object, Array and Function.

why : Because Javascript is **Dynamically type.** language.

---


## var 



**var** is the keyword the used to declear the value before **ES6**.

it is a **functional scope** , and **global scope** but **not block scope**.

### Problem 
1. Allow to declear the **same <variable_name>**.
2. Not **block scope**.
3. Hoisted and Initialized with **undefined**.
4. No temporial dead Zone (TTZ).
5. Not Properly work with async funtions.


```javascript

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

``` output
Output
4
4
4
```


----

## let

let is the keyword is introducing in ES6.

It is a **Golbal scope ,Functional Scope and Block Scope.** it can be **Reassigned** but not Redeclear.


### Charcteristic
1. Block Scoped
2. Can Be Reassigned
3. Cannot Be Redeclared.
4. Hoisted.
5. Has Temporal Dead Zone (TDZ).
    (Cannot be accessed before its declaration.)
6. Preferred in Modern JavaScript.

---

## const

const is a keyword used to declare a variable whose value cannot be reassigned after initialization.

### Characteristics 
1. Block Scoped
2. Cannot Be Reassigned.
3. Cannot Be Redeclared
4. Must Be Initialized.
5. Hoisted
6. Has Temporal Dead Zone (TDZ)
7. Preferred for Fixed References

---

# Loops

Loops is used for the iterating on the objects, array, String. to traverse the each element based on some condition.

## Types of loops into 

### 1. for

Used to iterate over the array and used when the Number of iteration is kown.
```javascript
  for(initialize ; condition; increment){
    // code
  }
```


### 2. while 
Used when number of iteration is unkown.

```javascript
initilization
while(condition){
  // code
  increment;
}
```


### 3. do-While
Excutes the block of code Onces.

```javascript
initization
do{
  // code
  increment;
}while(condition)
```


### 4. for...in
Iterates over the key(propertise) of and Object;


```javascript
for(const key in obj){
  // code
}

// Note : it give the inherited properties also
```

### 5. for...of
Iterated Over the values of iterable Object and array.

---

## Spread (...)

It is used for expand the elements form Array, Object ,String into a individual elements.

**use case**
1. copying an Array
2. Merge Array
3. passing multiple Agrument of a function

## rest (...)

Used to collects multiple values  into a single Array.

**use cases**

function arguments, array destructuring, and object destructuring to gather remaining elements or properties.


--- 
## ES 6 (Features)
1. let const variables
2. Arrow functions
3. template literals
4. Default parameters 
5. Destructuring Array, Objects
6. rest and spread operator
7. classes
8. module import and export keywords
9. symbol data type (make value Unique);
10. for...of loop iterates over the object
11. map and set
---

##  Functions 

function is the re-useable block of code. designe to perform specific task .it is only used when you called(invoke).

**typeof function = "function"(functional object)**


### first class functions
In javascript supports first class functions, which means function treated as Value.

**They can be**

1. Assigned to variable 
2. passed as argument
3. return from another function
4. stored into data structures like Arrays and Object.

### types of functions
1. function Decleararion. / statement.
2. function Expression (stored into variable)
3. Arrow function (ES 6 feature)
4. Ananymous function
5. Immediately Invoked function expression (IIFE)
6. callback functions
7. Higher order functions
8. Recursive function


### 1. function Declearation / Statement

function declaration (is also function statement) is a defined with **function** keyword and name

```javascript
  function greet () {
    //code
  }
  greet();
```


### 2. function Expression 
function is assigned to a **variable** as value.

```javascript
  var name = function greet () {
    //code
  }
  name();
```

### 3.Arrow function (ES6 feature)
Arrow function is shorter way to write a function introduced into ES6, They do not have their own **this, arguments prototypes , or constructor.**

commonly used into callbacks, array methods and higher order functions

```javascript
const greet = () => {
  // code
  return // 
}

// if oneline function 
const greet = ((num) => num*2) 
// here not need the return 
```

### 4. Ananymouns function

An anonymouns function is a function **without a name**.

```javascript 
const greet = function {
  //code
}

// [note] : we can't write it alone
```


## 5. Immediately Invoked Function Expression (IIFE)

An IIFE is a function that executes immediately after being defined.

```javascript
(function () {
    console.log("IIFE Executed");
})();
```

### Arrow Function IIFE

```javascript
(() => {
    console.log("IIFE Executed");
})();
```

### Use Cases

- Create private scope.
- Avoid global scope pollution.
- Run initialization code once.

---

## 6. Callback Function

A callback function is a function passed as an argument to another function and executed later.

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}

function processUser(callback) {
    callback("Ganesh");
}

processUser(greet);
```
### Use Cases

- Event handling.
- Asynchronous operations.
- Array methods.

---

## 7. Higher Order Function (HOF)

A Higher Order Function is a function that:

- Takes another function as an argument.
- Returns a function.

### Accepting a Function

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(calculate(5, 10, add));
```

### Returning a Function

```javascript
function multiplyBy(num) {
    return function (value) {
        return value * num;
    };
}

const double = multiplyBy(2);

console.log(double(5));
```

### Common Examples

- map()
- filter()
- reduce()
- forEach()

---

## 8. Recursive Function

A recursive function is a function that calls itself until a base condition is reached.

### Countdown Example

```javascript
function countDown(num) {
    if (num === 0) {
        return;
    }

    console.log(num);

    countDown(num - 1);
}

countDown(5);
```

### Factorial Example

```javascript
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));
```

### Output

```javascript
120
```

### Characteristics

- Must have a base condition.
- Useful for tree traversal and divide-and-conquer algorithms.
- Without a base condition, it can cause a stack overflow error.

---

# Quick Revision Table

| Function Type | Purpose |
|--------------|---------|
| Function Declaration | Regular named function |
| Function Expression | Function stored in a variable |
| Arrow Function | Short ES6 syntax |
| Anonymous Function | Function without a name |
| IIFE | Runs immediately after creation |
| Callback Function | Passed as an argument |
| Higher Order Function | Takes or returns functions |
| Recursive Function | Calls itself |


---

# Difference Between Normal Function and Arrow Function

| Feature | Normal Function | Arrow Function |
|----------|----------------|----------------|
| Syntax | `function greet() {}` | `const greet = () => {}` |
| `this` Binding | Has its own `this` | Inherits `this` from parent scope |
| `arguments` Object | Available | Not available |
| Constructor | Can be used with `new` | Cannot be used with `new` |
| Prototype Property | Has `prototype` | Does not have `prototype` |
| Hoisting | Function declarations are hoisted | Not hoisted like function declarations |
| Implicit Return | Requires `return` | Can return implicitly |
| Suitable For | Object methods, constructors | Callbacks, array methods, short functions |
| Can Be Named | Yes | Usually assigned to variables |
| `super` Keyword | Has its own context | Inherits from surrounding scope |

## Example

### Normal Function

```javascript
function add(a, b) {
    return a + b;
}
```

### Arrow Function

```javascript
const add = (a, b) => a + b;
```

## Interview One-Liner

| Normal Function | Arrow Function |
|----------------|----------------|
| Own `this`, `arguments`, `prototype`, can be used as constructor | Lexically inherits `this`, no `arguments`, no `prototype`, cannot be used as constructor |
---