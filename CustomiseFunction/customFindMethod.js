// simple implementation of find method;

const arr = [1,1 ,4,9 ,5 ,2 ,3, 2,3,5,5,4,0];
//How to use




Array.prototype.myfind = function(callback){
    
    for(let i = 0; i < this.length; i++){
        
        const result = callback(this[i] , i, this);
        
        if(result){
            return this[i];
        }
    }
    
    return undefined;
}


const ans = arr.myfind((num) => num == 0);
console.log(ans);