let cartStorage = localStorage;

exports.addProduct = (key, product) =>{
    cartStorage.setItem(key,product);
}

exports.getProduct = (key) => {
    let product = cartStorage.getItem(key);
    return product;
}

exports.removeProduct = (key) => {
    cartStorage.removeItem(key);
}

exports.clearProducts = () => {
    cartStorage.clear();
}