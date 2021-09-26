let cartList = document.getElementById("cart-list");
let priceElement = document.getElementById("total-price");

//Appel de l'affichage du panier
displayCart();

//Fonction d'affichage du contenu du panier
function displayCart(){
    let productList = [];
    let totalPrice = 0;
    cartList.innerHTML = "";
    priceElement.innerHTML = "";
    
    if(localStorage.getItem("cart") !== null){
        productList = JSON.parse(localStorage.getItem("cart"));  
        console.log(productList);
        for(let product of productList){
            let price = parseInt(product.price)/100*parseInt(product.quantity);
            cartList.innerHTML += `<div class="row align-items-center py-2 border border-dark">
            <div class="col-2"><img class="img-fluid" src=${product.imageUrl} alt="Photo de l'appareil"></div>
            <div class="col">${product.name}</div>
            <input type="number" id="quantity-${product.id}" min="1" max="9" value="${parseInt(product.quantity)}">
            <div class="col text-center">${price.toLocaleString('fr-FR', {style: 'currency', currency: 'EUR'})}</div>
            <div class="h5 float-right mr-4"><button class="btn btn-light" id="delete-product-${product.id}">X</button></div>
            </div>`;
            totalPrice += price;
        }
        priceElement.innerHTML += `<div class="col text-right h5">
                Total: 
            </div> 
            <div class="h5 mr-2">${totalPrice.toLocaleString('fr-FR', {style: 'currency', currency: 'EUR'})}</div>`;
    }   
    else{
        cartList.innerHTML += `<div class="text-center">Vous n'avez ajouté aucun article à votre panier</div>`;
    }  
    deleteProduct();
    modifyQuantityOfProduct();      
}


//Fonction de modification de la quantité des produits
function modifyQuantityOfProduct(){
    if(localStorage.getItem("cart") !== null){
        productList = JSON.parse(localStorage.getItem("cart"));
        let inputList = document.querySelectorAll('input[type=number]');
        for(let cpt = 0;cpt < inputList.length;cpt++ ){
            inputList[cpt].addEventListener("change", function(){
                productList[cpt].quantity = parseInt(inputList[cpt].value);

                localStorage.setItem("cart", JSON.stringify(productList));
  
                displayNumberOfProduct(calculNumberOfProduct(productList));         
                displayCart();
            })
        }
    } 
}

//Fonction de suppression d'un produit du panier
//Paramètre: Produit
function deleteProduct(product){
    if(localStorage.getItem("cart") !== null){
        productList = JSON.parse(localStorage.getItem("cart"));
        for(product of productList){
            let buttonDeleteToCart = document.getElementById(`delete-product-${product.id}`);
            buttonDeleteToCart.addEventListener("click", function(){
                productList.splice(productList.indexOf(product.id),1);
                if(productList.length === 0){
                    localStorage.removeItem("cart");
                } else{
                    localStorage.setItem("cart", JSON.stringify(productList));
                }   
                displayNumberOfProduct(calculNumberOfProduct(productList));         
                displayCart();
            })
        }
    } 
}