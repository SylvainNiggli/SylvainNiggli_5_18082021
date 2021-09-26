let cart = JSON.parse(localStorage.getItem("cart"));
let productQuantity = document.getElementById("product-quantity");


//Appel de la fonction d'affichage du nombre de produit du panier
displayNumberOfProduct(calculNumberOfProduct(cart));

//Fonction de calcul de la quantité de produit dans le panier
//Paramètre: Panier
function calculNumberOfProduct(cart){
    if(cart != null){
        let total = 0;
        for(product of cart){
            total += parseInt(product.quantity);
        }
        return total;
    }
    else{
        return 0;
    }
}

//Fonction d'affichage de la quantité de produit du panier
//Paramètre: Quantité
function displayNumberOfProduct(quantity) { 
    productQuantity.innerHTML = `(${quantity})`;  
}