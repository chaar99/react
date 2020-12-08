export const countDuplicatesItemArray = (value, array) => {
    let count = 0;
    array.forEach(arrayValue => {
        if (arrayValue === value){
            count++;
        }
    });
    return count;
};

export const removeArrayDuplicates = array =>{
    return Array.from( new Set(array));
};

export const removeItemArray = (array, item) => {
    const index = array.indexOf(item);
    if (index > -1){
        array.splice(index, 1);
    }
    return array;
};

export const totalAmount = (productsCar, productos) => {
    let total = 0;
    for(let i = 0; i< productsCar.length; i++) {
        for(let j = 0; j< productos.length; j++) {
            if (productsCar[i] === productos[j].id_productos) {
                total = total + parseInt(productos[j].precio, 10);
            }
        }
    }
    return total;
}

export const productsDetail = (products, productIds) => {
    let productos = [];
    const ids = removeArrayDuplicates(productIds);
    for(let i = 0; i< products.length; i++) {
        for(let j = 0; j< ids.length; j++) {
            if(products[i].id_productos === ids[j]){
                const quantity = countDuplicatesItemArray(products[i].id_productos, productIds);
                products[i].quantity = quantity;
                productos.push(products[i]);
            }
        }
    }
    return productos;
};