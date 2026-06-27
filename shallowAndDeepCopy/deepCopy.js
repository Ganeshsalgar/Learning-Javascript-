function deepCopy(obj , visited = new WeakMap()){
    if(typeof obj !== "object" || obj === null){
        return obj;
    }

    if(obj instanceof Date){
        return new Date(obj);
    }

    if(obj instanceof Map){
        const copyMap = new Map;

        for(const [key , value] of obj){
            copyMap.set(
                deepCopy(key , visited),
                deepCopy(value , visited)
            )
        }

        return copyMap;
    }

    if(obj instanceof Set){
        const copySet = new Set;

        for(const value of obj){
            copySet.add(deepCopy(value , obj));
        }

        return copySet;
    }

    if(visited.has(obj)){
        return visited.get(obj);
    }

    const copy = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));


    visited.set(obj , copy);

    
    for(const key of Reflect.ownKeys(obj)){
        copy[key] = makeOwnDeepCopy(obj[key] , visited);
    }

    return copy;


}



console.log(user);
const newUser = makeOwnDeepCopy(user);
newUser.address.city = "Mumbai"

console.log(newUser);