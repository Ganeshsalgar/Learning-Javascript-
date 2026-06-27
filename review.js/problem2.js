const data = require("./data.js");

function avgPriceOfProductBasedOnCatogories(data){
    const priceAndCount = data.reduce((result , product) => {
        const category = product.category;
        const price = product.price;
        if(!result[category]){
            result[category] = {
                totalPrice : 0,
                totalCount : 0
            }
        }
        result[category].totalPrice += Number(price);
        result[category].totalCount++


        return result
    } , {})

    return Object.entries(priceAndCount).reduce((result , product) => {
            const category = product[0];
            const productsPriceAndCount = product[1];
            const avg = productsPriceAndCount.totalPrice / productsPriceAndCount.totalCount;

            result[category] = avg;

            return result;
    } , {})
}


console.log(avgPriceOfProductBasedOnCatogories(data));
