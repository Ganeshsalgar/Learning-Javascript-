// Without using sort(), find the median-priced product in each category.


// For example, if a category has prices:

// 100
// 300
// 200
// 500
// 400

// The median is:

// 300

const data = require("./data");

function getMedianPriceCategoryWise(data){
    console.log(data[0]);
    
    return data.reduce((result , product) => {
        const category = product.category;
        const price = product.price;

        if(!result[category]){
            result
        }
    } , {})

}

console.log(getMedianPriceCategoryWise(data));
