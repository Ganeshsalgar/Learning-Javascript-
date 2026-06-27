function each (elements , callback){
    if(!Array.isArray(elements)){
        throw new TypeError("Expected an Array");
    }

    if(typeof callback !== "function"){
        throw new TypeError("Expected the callback Function");
    }

    const length = elements.length;

    for(let i = 0; i < elements.length; i++){
        if(i in elements){
            callback(elements[i] , i , elements);
        }
    }
    
}


function map (elements , callback){

    if(Array.isArray(elements)){
        throw new TypeError("Expected an Array");
    }

    if(typeof callback !== "function"){
        throw new TypeError("Expected the Callback function");
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