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

Task executes independently wihout blocking the **Main thread** allowing other code to run while waiting for long operations.s

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

