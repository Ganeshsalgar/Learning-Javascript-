console.log(null ?? "Default");      // Default
console.log(undefined ?? "Default"); // Default

console.log(0 ?? 100);              // 0
console.log(false ?? true);         // false
console.log("" ?? "Hello");         // ""