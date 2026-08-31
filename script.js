// ================= ORDER POPUP =================

let orderButtons = document.querySelectorAll(".menueinfo button");

let orderPopup = document.getElementById("orderPopup");
let closeOrder = document.getElementById("closeOrder");

let orderItem = document.getElementById("orderItem");
let quantity = document.getElementById("quantity");
let totalPrice = document.getElementById("totalPrice");

let selectedPrice = 0;


// Order Now button

orderButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let card = button.closest(".menuecards");

        let itemName = card.querySelector("h3").innerText;
        let price = parseInt(card.querySelector("span").innerText);

        selectedPrice = price;

        orderItem.value = itemName;
        quantity.value = 1;

        totalPrice.innerText = selectedPrice;

        orderPopup.classList.add("active");

    });

});


// Quantity change

quantity.addEventListener("input", function() {

    let qty = parseInt(quantity.value);

    if (qty < 1 || isNaN(qty)) {
        qty = 1;
        quantity.value = 1;
    }

    totalPrice.innerText = selectedPrice * qty;

});


// Close popup

closeOrder.addEventListener("click", function() {

    orderPopup.classList.remove("active");

});


// Click outside popup

orderPopup.addEventListener("click", function(event) {

    if (event.target === orderPopup) {

        orderPopup.classList.remove("active");

    }

});


// Place Order

document.getElementById("orderForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("customerName").value;
    let item = orderItem.value;
    let qty = quantity.value;
    let total = totalPrice.innerText;

    alert(
        "Order Placed Successfully! 🎉\n\n" +
        "Customer: " + name + "\n" +
        "Item: " + item + "\n" +
        "Quantity: " + qty + "\n" +
        "Total: Rs. " + total
    );

    orderPopup.classList.remove("active");

    document.getElementById("orderForm").reset();

});