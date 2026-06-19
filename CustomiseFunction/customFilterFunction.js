//  simple implementation of filter

Array.prototype.myFilter = function(callback){
    const result = [];

    for(let i = 0; i < this.length; i++){
        if(callback(this[i] , i, this)) result.push(this[i]);
    }
    return result;
}


const newArr2 = arr.myFilter((num) => num > 2);
console.log(newArr2);



