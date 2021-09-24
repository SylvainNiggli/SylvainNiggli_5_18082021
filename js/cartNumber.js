let cart = JSON.parse(localStorage.getItem("cart"));
let productNumber = document.getElementById("product-number");

showNumberOfProduct(calculNumberOfProduct(cart));

function calculNumberOfProduct(cart){
    if(cart != null){
        let total = 0;
        for(product of cart){
            total += product.quantity;
        }
        return total;
    }
    else{
        return 0;
    }
}

function showNumberOfProduct(number) { 
    console.log(number);
    productNumber.innerHTML = `(${number})`;  
}