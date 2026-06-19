// flat
// Simple implementation flat method

// how use flat

const arr = [1, 2, 3,[1,2,3,[4,5,6, [8,9, [10]]]]];

const ans = arr.flat(Infinity);
console.log(ans);

Array.prototype.myFlat = function (value){

    if(typeof value === "number"){
        if(Array.isArray(this)){
            const result = [];
            result.push(this[i]);
        }
    }   
    // if(!Array.isArray(this)){
    //     return this;
    // }
    let result = [];

}

