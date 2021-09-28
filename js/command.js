//Fonction d'envoie de la requête de commande
function sendCommand(e) {
  const contact = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value
  };
  let products = JSON.parse(localStorage.getItem("cart"));
  let productList = [];

  for(element of products){
    productList.push(element.id);
  }

  let data = {
      contact: contact,
      products: productList
  };

  e.preventDefault();
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
      }     
  };
  fetch("http://localhost:3000/api/cameras/order", options)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
    localStorage.setItem("confirmation", JSON.stringify(value));
    window.location = "confirmation.html";
  });
}

//Mise sur écoute de l'évènement "submit" avec appel de la fonction de commande
//lorsque l'évènement se produit
let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    } else{
        sendCommand(event);
    }
    form.classList.add('was-validated')
  });
  