// simple implementation of some() method

// how to use 

const arr = [1,1 ,4,9 ,5 ,2 ,3, 2,3,5,5,4,0];

const ans1 = arr.some((num) => num === 10);

console.log(ans1);


Array.prototype.mySome = function(callback){

    for(let i = 0; i < this.length; i++){
        if(callback(this[i] , i, this)){
            return true;
        }

    }
    return false;
}


const ans = arr.mySome((num) => num === 10);

console.log(ans);