let command = JSON.parse(localStorage.getItem("confirmation"));
let products = JSON.parse(localStorage.getItem("cart"));
let confirmationMsg = document.getElementById("confirmation-msg");

let contact = command.contact;
let id = command.orderId;
let totalPrice = 0;

//Appel de la fonction d'affichage de la page confirmation
displayConfirmation();

//Fonction d'affichage de la page de confirmation
function displayConfirmation(){
    confirmationMsg.innerHTML += `<div class="row mt-5">
        <div class="col">
            <h1>Félicitations, votre commande a été enregistrée avec succès !</h1>
            <h2 class="h5">Numéro de commande: ${id}<h2>
        </div>
    </div>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 mb-4">
                <h2>Votre contact</h2>
            </div>
            <div class="col-12 mt-2"><p class="h6">Prénom: ${contact.firstName}</p></div>
            <div class="col-12 mt-2"><p class="h6">Nom: ${contact.lastName}</p></div>
            <div class="col-12 mt-2"><p class="h6">Adresse: ${contact.address}</p></div>
            <div class="col-12 mt-2"><p class="h6">Ville: ${contact.city}</p></div>
            <div class="col-12 mt-2"><p class="h6">Email: ${contact.email}</p></div>
        </div>
    </div>
    <div class="container">
        <div class="row mt-5 ">
            <div class="col-12 mb-4">
                <h2>Vos produits</h2>
            </div>
            <div class="col-2"></div>
            <div class="col text-center h4">Article</div>
            <div class="col text-center h4">Quantité</div>
            <div class="col text-center h4">Prix</div>
        </div>
    </div>`;

    for(let product of products){
        console.log(product);
        let price = parseInt(product.price)/100*parseInt(product.quantity);
        confirmationMsg.innerHTML += `<div class="row align-items-center py-2 border border-dark">
        <div class="col-2"><img class="img-fluid" src=${product.imageUrl} alt="Photo de l'appareil"></div>
        <div class="col">${product.name}</div>
        <div class="col text-center">${product.quantity}</div>
        <div class="col text-center">${price.toLocaleString('fr-FR', {style: 'currency', currency: 'EUR'})}</div>
        </div>`;
        totalPrice += price;
    }
    
    confirmationMsg.innerHTML += `<div class="row mt-5">
        <div class="col mb-4">
        <h2>Total: ${totalPrice.toLocaleString('fr-FR', {style: 'currency', currency: 'EUR'})}</h2>
        </div>
    </div>`;
    
    localStorage.removeItem("cart");
}


