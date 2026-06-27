const data = require("./data.js");

function getProductsCategoriesWise(data){
    // console.log(data[0]);

    return data.reduce((result , product) => {
        const category = product.category;

        if(!result[category]){
            result[category] = 0;
        }
        result[category]++;

        return result;
    } , {})
}


console.log(getProductsCategoriesWise(data));

