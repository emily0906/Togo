var cartOpen = false; // True of false, if the carts popup window is open

function displayAddress() {
    try {
        document.getElementById("deliveryAddress").value = getUserAddress();
    } catch (err) {
        alert("Please include User.js before IncludeTop.js.\nThey are dependant on one another.");
    }
}

// Called when the user enters a new address in the address bar
function modifyAddress(input) {
    try {
        setUserAddress (input.trim());
    } catch (err) {
        alert("Please include User.js before IncludeTop.js.\nThey are dependant on one another.");
    }
}

// Open the carts pop up window
// Returns true if the cart was opened or closed
function openCart() {
    if (cartOpen)
        return closeCart();
    cartOpen = true;

    var cart = document.getElementById("cartPopUp");
    cart.style.display = "inline-block";

    return true;
}

// Close the carts pop up window
// Returns true if the cart was closed
function closeCart() {
    if (!cartOpen)
        return false;
    cartOpen = false;

    var cart = document.getElementById("cartPopUp");
    cart.style.display = "none";

    return true;
}