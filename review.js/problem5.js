// You have to calculate three values in a single reduce():

// totalProducts
// totalStock
// totalInventoryValue

const data = require("./data")

function getValues(data){
    
    return data.reduce((result , product) => {
        const category = product.category;
        const price = Number(product.price);
        const stock = Number(product.stock);        

        if(!result[category]){
            result[category] ={
                totalProducts : 0,
                totalStock : 0,
                totalInvertory : 0
            }
        }

        result[category].totalProducts++;
        result[category].totalStock += stock;
        result[category].totalInvertory += price * stock;

        return result;

    } , {})
}

console.log(getValues(data));
