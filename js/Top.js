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

/*
    Adds the food to the cart
    All you need to pass as parameters is the name of the food item
    NOTE: This name MUST match with one from database.js
    Updates the cart accordingly
*/
function addContentsToCart(foodName) {
    updateCart(addFoodToCartCookie(getFoodItemByName (foodName)));
}

// Updates the cart visually to append all elements to the cart
// I know this isn't an optimal solution, since I erase and rewrite every element
// But it will be fine for our purposes, and the number of elements will practically always be small (< 10)
function updateCart(allFoodNamesCookieKey) {
    var orders = document.getElementById("allOrders");
    orders.innerHTML = "";

    // Each item is split by comma
    var food = allFoodNamesCookieKey.split(",");
    var FoodItemObject = null;

    try {
        var sumPrice = 0;

        for (var i = 0; i < food.length; i++) {
            if (food[i] == "") // Remove any Empty split
                continue;

            FoodItemObject = getFoodItemByName(food[i].trim());

            if (FoodItemObject == null) {
                alert("Incorrect names for food items detected, please check the console encase of any errors.");
                return;
            }

            // Create price and order object
            var order = document.createElement("div");
            var price = document.createElement("span");

            price.className = "price";
            order.className = "order";

            // Settings content values
            price.textContent = "$" + FoodItemObject.price;
            order.textContent = FoodItemObject.name;

            // Appending children
            order.appendChild(price);
            orders.appendChild(order);

            sumPrice += FoodItemObject.price;
        }
        
        // ASSUMPTION: Manitoba's taxes
        var GST = sumPrice * 0.05;
        var PST = sumPrice * 0.07;
        var total = sumPrice + GST + PST;

        // Truncating decimals
        sumPrice = toFixed(sumPrice, 2);
        GST = toFixed(GST, 2);
        PST = toFixed(PST, 2);
        total = toFixed(total, 2);

        // Now we will set the prices
        // Subtotal
        getPriceChild(document.getElementById("subtotal")).textContent = "$" + sumPrice;
        // GST
        getPriceChild(document.getElementById("GST")).textContent = "$" + GST;
        // PST
        getPriceChild(document.getElementById("PST")).textContent = "$" + PST;
        // Total
        getPriceChild(document.getElementById("Total")).textContent = "$" + total;
    }
    catch (err) {
        alert(err);
        alert("Sorry, a problem has occurred. Please try again. \0 User.js required.");
    }
}

// Obtained from https://stackoverflow.com/questions/4187146/truncate-number-to-two-decimal-places-without-rounding
// Truncating a float to a specific number of decimal points
function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

// Returns the 'price' child of the span object
// This is specifically for the totalsSection in Top.html
// And will return the cooresponding span object that contains the price
function getPriceChild(spanObject) {
    var childs = spanObject.childNodes;

    for (var i = 0; i < childs.length; i++)
        if (childs[i].className == "price")
            return childs[i];

    return null;
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

function makeOrder() {
    alert("Order has been made!");
    alert("This page is not created yet");
}