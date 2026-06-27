// Without using sort(), filter(), or a second reduce(), return the top 2 most expensive products in each category.

const data = require("./data");

function expensive2ProductInEachCategory(data){
    // console.log(data[0]);

    return data.reduce((result , product) => {
        const category = product.category;
        const title = product.title;
        const price = product.price;

        if(!result[category]){
            result[category] = [];
        }


        if(result[category].length === 0){
            result[category].push({title : title , price : price});
        }
        else if(result[category].length == 1){
            if(result[category][0].price < price) result[category].unshift({title : title , price : price});
            else  result[category].push({title : title , price : price});
        }
        else{
            if(result[category][0].price < price){
                result[category][1] = result[category][0];
                result[category][0] = {title:title, price:price};
            }
            else if(result[category][1].price < price && result[category][0].price > price){
                result[category][1] = {title:title, price:price};
            }
        }


        return result;

    } , {})
    
}


console.log(expensive2ProductInEachCategory(data));
