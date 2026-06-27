function each(elements , callback){
    if(!Array.isArray(elements)){
        throw new TypeError("Expected An Array");
    }

    if(typeof callback !== "function"){
        throw new TypeError("Expected an Callback  function");
    }

    const length = elements.length;

    for(let i = 0; i < length; i++){
        if(i in elements){
            callback(elements[i] , i , elements);
        }
    }

}


function map(elements , callback){
    if(!Array.isArray(elements)){
        throw new TypeError("Expected an Array");
    }

    if(typeof callback !== "function"){
        throw new TypeError("Expected the Callback Funtion here");
    }

    const length = elements.length;
    const result = new Array(length);

    for(let i = 0; i < length; i++){
        if(i in elements){
            result[i] = callback(elements[i] , i , elements);
        }
    }

    return result;
}


function reduce(elements , callback, startValue){
    if(!Array.isArray(elements)){
        throw new TypeError("Expected an Array");
    }

    if(typeof callback !== "function"){
        throw new TypeError("Expected the Callback Function");
    }

    if(elements.length === 0 && startValue === undefined){
        throw new TypeError("Array is empty");
    }

    let accumalator;
    let startIdx;

    if(startValue === undefined){
        accumalator = elements[0];
        startIdx = 1;
    }
    else{
        accumalator = startValue;
        startIdx = 0;
    }

    const length = elements.length;


    for(let i= startIdx; i < length; i++){
        if(i in elements){
            accumalator = callback(accumalator , elements[i], i , elements);
        }
    }
    return accumalator;
}

function filter(elements , callback){
    if(!Array.isArray(elements)){
        throw new TypeError("Expected an Array");
    }

    if(typeof callback !== "function"){
        throw new TypeError("Expected the callback Function");
    }

    const length = elements.length;
    const result = [];

    for(let i = 0; i <length; i++){
        if(i in elements){
            if(callback(elements[i], i ,elements)){
                result.push(elements[i]);
            }
        }
    }

    return result;
}

function find(elements , callback){
    if(!Array.isArray(elements)){
        throw new TypeError("Expected the Array");
    }

    if(typeof callback !== "function"){
        throw new TypeError("Expected the callback Function");
    }

    const length = elements.length;

    for(let i = 0; i < length; i++){
        if(i in elements){
            if(callback(elements[i] , i , elements)){
                return elements[i];
            }
        }
    }

    return undefined;

}



function flatten(elements){

    if(!Array.isArray(elements)){
        throw new TypeError("Expected an Array");
    }

    const result = [];
    
    function helper(arr){
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                helper(arr[i]);
            }
            else{
                result.push(arr[i]);
            }
        }
    }

    helper(elements);

    return result;
}


function keys(obj){
    if(obj === null && typeof obj !== "object"){
        throw new TypeError("Expected the Object here");
    }

    const result = [];

    for(const key in obj){
        if(Object.prototype.hasOwnProperty(obj , key)){
            result.push(key);
        }
    }

    return result;
}
