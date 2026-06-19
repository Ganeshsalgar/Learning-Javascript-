// implement simple version

// how to use
// [note : modified the original array]

// Can:
// ✓ Add
// ✓ Delete
// ✓ Replace

const arr = [1, 1, 4, 9, 5, 2];
console.log(arr);

console.log(arr.splice(0, 5));

Array.prototype.mySplice = function (startIndex, deleteCount) {
  const removed = [];

  for (let i = startIndex; i < startIndex + deleteCount; i++) {
    removed.push(this[i]);
  }

  for (let i = startIndex + deleteCount; i < this.length; i++) {
    this[i - deleteCount] = this[i];
  }

  this.length = this.length - deleteCount;

  return removed;
};

console.log("my method");

const arr1 = [1, 1, 4, 9, 5, 2];
console.log(arr1);

console.log(arr1.mySplice(0, 5));
