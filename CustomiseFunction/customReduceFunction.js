// use of reduce

const arr = [1,2,7,4,5];

const ans = arr.reduce((acc , curr) => {
    return (curr > acc) ? curr : acc;
}, 0)


// console.log(ans);

// simple implementation of Reduce

Array.prototype.myReduce = function (callback , initialValue){
    let ans = initialValue;

    for(let i = 0; i < this.length; i++){
       ans = callback(ans , this[i]);
    }

    return ans;
}


const ans1 = arr.myReduce(((acc, curr) => (curr > acc) ? curr : acc) , 0);

console.log(ans1);