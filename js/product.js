let products = document.getElementById("product");
console.log(products);
let id = window.location.search.substring(1).split('=')[1];
console.log(id);

class Product{
    constructor(id,name,description,price,lenses,imageUrl){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.lenses = lenses;
        this.imageUrl = imageUrl;
    }
}

let productItem = new Product();
fetch(`http://localhost:3000/api/cameras/${id}`)
    .then(response => response.json())
    .then(data => {
        let product = new Product(data._id,data.name,data.description,data.price,data.lenses,data.imageUrl);
        console.log(product);
        products.innerHTML += `<div class="col-md-6 mt-5">
        <img class="img-fluid" src=${data.imageUrl} alt="Photo de l'appareil">
        </div>
        <div class="col-md-6 mt-5">                 
            <h1>${data.name}</h1>
            <p>${data.description}</p>
            <label for="lenses-select">Choix de lentille:</label>
            <select name="lenses" id="lenses-select">
            </select>    
            <p>Prix : ${data.price}</p>
            <button type="button" class="btn btn-primary">Ajouter au panier</button>
        </div>`;
        let select = document.getElementById("lenses-select");
        let lenseList = data.lenses;
        console.log(lenseList);
        for(let i = 0; i < lenseList.length; i++){
            select.innerHTML += `<option value="${lenseList[i]}">${lenseList[i]}</option>`;
            console.log(lenseList[i]);
        } 
        productItem = product;       
    });

console.log(productItem);