const data = require("./data");

function inventoryValue(data){
    return data.reduce((result , product) => {
        const category = product.category;
        const price = Number(product.price);
        const stock = Number(product.stock);

        if(!result[category]){
            result[category] = 0
        }

        result[category] += price * stock;
        

        return result;
    } , {});


}

console.log(inventoryValue(data));

