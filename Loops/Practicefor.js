// Easy (1-10)
// 1. Print Numbers
// Print numbers from 1 to 10 using a for loop.
for(let i = 1; i <= 10; i++){
    // console.log(i);
}

// 2. Print Even Numbers
// Print all even numbers between 1 and 20.

for(let i = 0; i <=20; i++){
    // if(i % 2 == 0) console.log(i)
}


// 3. Print Odd Numbers

// Print all odd numbers between 1 and 20.

for(let i = 0; i <= 20; i++){
    // if(i % 2 != 0) console.log(i);
}

// 4. Sum of Numbers
// Find the sum of numbers from 1 to 100.
let sum = 0;
for(let i = 0; i <= 100; i++) {
    sum += i;
}
// console.log(sum);



// 5. Multiplication Table

// Print the multiplication table of 5.
for(let i = 1; i <= 10; i++){
    // console.log(`5 * 1 = ${5*i}`);
}
// Output:

// 5 x 1 = 5
// 5 x 2 = 10
// ...




// 6. Array Traversal

// Print every element of:

const arr = [10, 20, 30, 40, 50];

for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
}



// 7. Count Elements

// Find the number of elements in an array without using .length.
let count = 0;
for(const ele of arr){
    count++;
}

// console.log(count);

// 8. Largest Number

// Find the largest number in:


const a = [5, 2, 9, 1, 7]

let mx = Number.MIN_VALUE;
for(let i = 0; i < a.length; i++){
    if(a[i] > mx){
        mx = a[i];
    }
}

// console.log(mx);

// 9. Count Positive Numbers
// Count positive numbers in:
const pos = [-1, 5, -3, 10, 2];

let countPos = 0;
for(let i = 0; i <= pos.length; i++){
    if(pos[i] > 0) countPos++;
}

// console.log(countPos);



// 10. Sum Array Elements
// Find the sum of all elements.
const arrSum = [10, 20, 30, 40]

let S= 0;
for(let i = 0; i < arrSum.length; i++){
    S+=arrSum[i];
}

console.log(S);