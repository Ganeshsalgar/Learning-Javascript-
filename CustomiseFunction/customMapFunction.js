// simple implementation of map

Array.prototype.myMap = function(callback){
    const result = [];

    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this));
    }


    return result;
}

let arr = [1,2,3,4];


const newArr  = arr.myMap((num) => {
    return num * 2;
});

console.log(newArr);



// simple implementation 