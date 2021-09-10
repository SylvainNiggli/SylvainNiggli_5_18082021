function send(e) {
    let contact = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        adress: document.getElementById("adress").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value
    };

    let products = JSON.parse(localStorage.getItem("cart"));

    let data = {
        contact: contact,
        products: products
    };
    e.preventDefault();
    fetch("http://localhost:3000/api/cameras/order", {
      method: "POST",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: data})
    })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
        document
          .getElementById("result")
          .innerText = value.postData.text;
    });
  }
  
  document
    .getElementById("form")
    .addEventListener("submit", send);
  