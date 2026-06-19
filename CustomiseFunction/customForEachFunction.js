//simple implementation of forEach method

// use case 

const arr = [1,1 ,4,9 ,5 ,2 ,3, 2,3,5,5,4,0];


// arr.forEach(num => console.log(num));


Array.prototype.myforEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i] , i , this);
    }
}
console.log(arr.myforEach((num) => console.log(num*2)));