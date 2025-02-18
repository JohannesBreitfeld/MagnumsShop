document.addEventListener("DOMContentLoaded", function () {
    const offCanvas = document.createElement("div");
    offCanvas.innerHTML = `
      <div class="offcanvas offcanvas-end" tabindex="-1" id="cartOffCanvas">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Varukorg</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <div id="cartItems" class="d-flex, d-flex-column"></div>
        </div>
        <div class="offcanvas-footer p-3">
          <button class="btn btn-danger w-100" onclick="clearCart()">Töm varukorg</button>
          <button class="btn btn-success w-100 mt-2">Till kassan</button>
        </div>
      </div>
    `;
    document.body.appendChild(offCanvas);

    updateCartCount();
});

let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

function saveCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

function clearCart() {
  shoppingCart = [];
  localStorage.removeItem("shoppingCart"); 
  updateCartModal(); 
  updateCartCount(); 
}

function addToCart(item) {
  let existingItem = shoppingCart.find(cartItem => cartItem.name === item.name);

  if (existingItem) 
  {
    existingItem.quantity += 1;
  } 
  else 
  {
    shoppingCart.push({ ...item, quantity: 1 });
  }

  saveCart();
  updateCartModal();
  updateCartCount();
}

function removeFromCart(index) {
  if (shoppingCart[index].quantity > 1) {
    shoppingCart[index].quantity -= 1;
  } else {
    shoppingCart.splice(index, 1);
  }

  saveCart();
  updateCartModal();
  updateCartCount();
}

  function updateCartCount() {
      const cartCount = document.getElementById("cartCount");
          
      const count = shoppingCart.reduce((total, item) => total + item.quantity, 0); 
      cartCount.textContent = count;
    
      cartCount.style.display = count > 0 ? "inline-block" : "none";
    }

    function openCart() {
      updateCartModal(); 
      const cartOffCanvas = new bootstrap.Offcanvas(document.getElementById("cartOffCanvas"));
      cartOffCanvas.show();
    
    }

  function updateCartModal() {
    const cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";

    const table = document.createElement("table");
    table.classList.add("table", "table-bordered", "cart-table");

    table.innerHTML = `
        <thead>
            <tr>
                <th>Produkt</th>
                <th>Antal</th>
                <th>Totalt pris</th>
         
            </tr>
        </thead>
        <tbody id="cartTableBody"></tbody>
    `;

    const tbody = table.querySelector("#cartTableBody");

    let totalsum = 0;

    shoppingCart.forEach((item, index) => {
        const row = document.createElement("tr");

        let total = item.quantity * item.price;
        totalsum += total;

        row.innerHTML = `
            <td>${item.name}</td>
            <td>
              <div class="d-flex flex-column align-items-center">
                <span class="fw-bold">${item.quantity}</span>
                  <div class="d-flex gap-2 mt-1">
                      <button class="btn btn-sm btn-success" onclick="increaseQuantity(${index})">+</button>
                      <button class="btn btn-sm btn-danger" onclick="decreaseQuantity(${index})">-</button>
                  </div>
              </div>
            </td>
            <td>${total} kr</td>
       
        `;

        tbody.appendChild(row);
    });

    const totalprice = document.createElement("p");
    totalprice.classList.add("total-price")
    totalprice.textContent = `Total summa: ${totalsum} SEK`;

    cartList.appendChild(table);
    cartList.appendChild(totalprice);

  }
  function increaseQuantity(index) {
    shoppingCart[index].quantity += 1;
    saveCart();
    updateCartModal();
    updateCartCount();
  }

  function decreaseQuantity(index) {
    if (shoppingCart[index].quantity > 1) 
    {
        shoppingCart[index].quantity -= 1;
    } else  
    {
        shoppingCart.splice(index, 1);
    }
    saveCart();
    updateCartModal();
    updateCartCount();
  }




