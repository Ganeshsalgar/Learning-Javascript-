// Without using sort(), find the most expensive product in each category.

const data = require("./data")

function getExpensiveProductInEachCatogory(data){
    return data.reduce((result , product) => {
        const category = product.category;
        const price = product.price;
        const title = product.title;

        if(!result[category] || result[category].price < price){
            result[category] = {
                title,
                price
            }
        }

        return result;

    } , {});
}

console.log(getExpensiveProductInEachCatogory(data));
