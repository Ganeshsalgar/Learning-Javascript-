// simple implementation of every() method
// how to use 
const arr = [];

const ans1 = arr.every(num => num < 0);
console.log(ans1);


Array.prototype.myEvery = function(callback){
    
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i] , i, this)){
            return false;
        }
    }
    
    return true;
}


const ans = arr.myEvery(num => num < 0);
console.log(ans);




