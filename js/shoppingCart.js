document.addEventListener("DOMContentLoaded", function () {
    const offCanvas = document.createElement("div");
    offCanvas.innerHTML = `
      <div class="offcanvas offcanvas-end" tabindex="-1" id="cartOffCanvas">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Varukorg</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <ul id="cartItems"></ul>
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

function addToCart(item) {
  shoppingCart.push(item);
  saveCart();
  updateCartModal();
  updateCartCount();
}

function removeFromCart(index) {
  shoppingCart.splice(index, 1);
  saveCart();
  updateCartModal();
  updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    
    const count = shoppingCart.length; 
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

    shoppingCart.forEach((item, index) => {
        const li = document.createElement("li");
        li.classList.add("p-2")
        li.textContent = `${item.name} - ${item.price} kr`;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.classList.add("btn", "btn-sm", "btn-danger", "ms-5");
        removeBtn.onclick = () => removeFromCart(index);

        li.appendChild(removeBtn);
        cartList.appendChild(li);
})}



