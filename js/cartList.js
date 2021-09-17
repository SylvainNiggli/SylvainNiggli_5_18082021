let cartList = document.getElementById("cart-list");
let priceElement = document.getElementById("total-price");
let deleteProduct = document.getElementById("delete-product");
let productList = [];
let totalPrice = 0;


if(localStorage.getItem("cart") !== null){
    productList = JSON.parse(localStorage.getItem("cart"));  
    for(let product of productList){
        let price = parseInt(product.price)/100*parseInt(product.quantity);
        cartList.innerHTML += `<div class="row align-items-center py-2 border border-dark">
        <div class="col-2"><img class="img-fluid" src=${product.imageUrl} alt="Photo de l'appareil"></div>
        <div class="col">${product.name}</div>
        <div class="col text-center">${product.quantity}</div>
        <div class="col text-center">${price.toLocaleString('fr-FR', {style: 'currency', currency: 'EUR'})}</div>
        <div class="h5 float-right pr-3">X</div>
        </div>`;
        totalPrice += price;
    }
}   
else{
    cartList.innerHTML += `<div class="text-center">Vous n'avez ajouté aucun article à votre panier</div>`
}     

priceElement.innerHTML += `<div class="h5 mr-2">${totalPrice.toLocaleString('fr-FR', {style: 'currency', currency: 'EUR'})}</div>`