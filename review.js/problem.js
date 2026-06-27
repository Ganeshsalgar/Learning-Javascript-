const data = require("./data");


function productBasedOnCategories(data){
    return data.reduce((result , product) => {
        const category = product.category;


        if(!result[category]){
            result[category] = []
        }

        result[category].push(product);
        return result;
    } , {})
}

console.log(productBasedOnCategories(data));
