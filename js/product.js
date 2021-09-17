let products = document.getElementById("product");
let id = window.location.search.substring(1).split('=')[1];

class Product{
    constructor(id,name,description,price,lenses,imageUrl, quantity){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.lenses = lenses;
        this.imageUrl = imageUrl;
        this.quantity = quantity;
    }
}

fetch(`http://localhost:3000/api/cameras/${id}`)
    .then(response => response.json())
    .then(data => {
        let product = new Product(data._id,data.name,data.description,data.price,data.lenses,data.imageUrl,1);
        products.innerHTML += `<div class="col-md-6 mt-5">
        <img class="img-fluid" src=${data.imageUrl} alt="Photo de l'appareil">
        </div>
        <div class="col-md-6 mt-5">                 
            <h1>${data.name}</h1>
            <p>${data.description}</p>
            <label for="lenses-select">Choix de lentille:</label>
            <select name="lenses" id="lenses-select">
            </select>    
            <p>Prix : ${(parseInt(data.price)/100).toLocaleString('fr-FR', {style: 'currency', currency: 'EUR'})}</p>
            <label for="quantity">Qty:</label>
            <input type="number" id="quantity" name="quantity" min="1" max="9" value="1">
            <p></p>
            <button type="button" id="add-cart" class="btn btn-primary">Ajouter au panier</button>
            <div class="invisible" id="add-product-msg">Produit ajouté !</div>
            </div>`;  
             
        let select = document.getElementById("lenses-select");
        let lenseList = data.lenses;
        for(let i = 0; i < lenseList.length; i++){
            select.innerHTML += `<option value="${lenseList[i]}">${lenseList[i]}</option>`;
        } 
        addToCart(product);       
    });

function addToCart(product){
    let buttonAddToCart = document.getElementById("add-cart");
    buttonAddToCart.addEventListener("click", function(){
        let productList = [];
        let quantity = document.getElementById("quantity").value;
        let exist = false;
        if(localStorage.getItem("cart") !== null){
            productList = JSON.parse(localStorage.getItem("cart"));
            for(element of productList){           
                if(element.id === product.id)
                {
                    element.quantity += parseInt(quantity,10);
                    exist = true;
                }
            }
        }        
        if(!exist){
            product.quantity = parseInt(quantity, 10);
            productList.push(product);
        }   
        localStorage.setItem("cart", JSON.stringify(productList));
        document.getElementById("add-product-msg").setAttribute("class", "visible text-success mt-1");
    })
}