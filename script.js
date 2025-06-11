document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product-1", price: 19.99 },
    { id: 2, name: "Product-2", price: 39.99 },
    { id: 3, name: "Product-3", price: 69.99 },
  ];

  let cartItems = [];

  const itemsList = document.getElementById("items-list");
  const checkoutBox = document.getElementById("checkout-box");
  const emptyCart = document.getElementById("empty-message");
  const cartTotal = document.getElementById("cart-total");
  const totalValue = document.getElementById("total-value");
  const checkoutButton = document.getElementById("checkout-button");

  products.forEach((type) => {
    const tag = document.createElement("div");
    tag.classList.add("product-desc");
    tag.innerHTML = `
    <span class = "product-name">${type.name} - $${type.price}</span>
    <button data-id ="${type.id}" class = "addtocart">Add</button>
    `;
    itemsList.appendChild(tag);
  });

  itemsList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const pro = products.find((p) => productId === p.id);
      addtoCart(pro);
    }
  });

  function addtoCart(pro) {
    cartItems.push(pro);
    renderCartItems();
  }

  function renderCartItems() {
    checkoutBox.innerText = "";
    let totalCartValue = 0;
    const size = cartItems.length;

    if (size > 0) {
      emptyCart.classList.add("hidden");
      cartItems.forEach((item, index) => {
        totalCartValue += item.price;
        const tag = document.createElement("div");
        tag.innerHTML = `
        ${item.name} - ${item.price}
        `;

        checkoutBox.appendChild(tag);
        totalValue.textContent = `$${totalCartValue.toFixed(1 + 1)}`;
      });
    } else {
      emptyCart.classList.remove("hidden");
      checkoutBox.classList.add("hidden");
    }
  }
  checkoutButton.addEventListener("click", () => {
    checkoutBox.textContent = "";
    cartItems = [];
    totalValue.textContent = "$0.00";
    alert("cart added successfully");
  });
});
