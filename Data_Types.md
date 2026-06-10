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

## Data Types

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

❌ Immutable (cannot create copy)

✅ Immutable (cannot be modified after creation, but copies can be created)

### Example

```javascript
let str = "Hello";
let newStr = str + " World";

console.log(str); // Hello
console.log(newStr); // Hello World
```

The original string is not modified; a new string is created.