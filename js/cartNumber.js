let cart = JSON.parse(localStorage.getItem("cart"));
let productNumber = document.getElementById("product-number");

if(cart != null){
    this.showNumber(cart.length);
}

function showNumber(number) {
    productNumber.innerHTML += `(${number})`;
}