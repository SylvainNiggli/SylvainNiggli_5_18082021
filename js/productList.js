let productList = document.getElementById("product-list");

displayAllProducts();

//Fonction d'affichage de tous les produits
function displayAllProducts(){
    fetch('http://localhost:3000/api/cameras')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            let cpt = 0;
            productList.innerHTML += `<div class="col-6 mt-5">
            <div class= "card">             
                <img src=${element.imageUrl} class="card-img-top">
                <div class="card-body bg-secondary">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.description}</p>
                    <a href="pages/product.html?id=${element._id}" class="stretched-link"></a>                  
                </div>
            </div>
        </div>`;
        cpt++;
        });     
    });
}
