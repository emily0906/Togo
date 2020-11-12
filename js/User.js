
// The address that the delivery will apply to
// Note that, this is only the default address
// The real address is taken from the cookie 'ADDRESS_COOKIE_KEY'
var address = "123 fake street";
var userLocation = 100;

const ADDRESS_COOKIE_KEY = 'userAddress';
const FOOD_COOKIE_KEY = "foodOrder"

// Adds food to the cart
// To do this, we will append the new food items name to the cookie storing the users order
function addFoodToCartCookie(FoodItem) {
    if (FoodItem == null)
        alert("Sorry, this selection is invalid. Please try a different option. /0 bad value.");
    var foodItems = "";

    // First, we get the current food items, then append our new food item to the cart
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var keyValue = cookies[i].split("=");
        if (keyValue[0].trim() == FOOD_COOKIE_KEY) {
            foodItems = keyValue[1];
            break;
        }
    }

    // No cookies found, so we create the cookie with the food items name
    if (foodItems == "")
        foodItems = FoodItem.name;
    else // Cookie was found, append the new food item to the cookie
        foodItems = foodItems + "," + FoodItem.name;

    // Update the cookie
    document.cookie = FOOD_COOKIE_KEY + "=" + foodItems;

    return foodItems;
}

// Gets the cookies storing the users current order
function getCurrentOrder() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var keyValue = cookies[i].split("=");
        if (keyValue[0].trim() == FOOD_COOKIE_KEY)
            return keyValue[1];
    }

    // There is nothing associated with the order yet
    return null;
}

function getUserAddress() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var keyValue = cookies[i].split("=");
        if (keyValue[0].trim() == ADDRESS_COOKIE_KEY)
            return keyValue[1];
    }

    // No cookies found, so we use default address instead
    return address;
}

function setUserAddress(newAddress) {
    document.cookie = ADDRESS_COOKIE_KEY + '=' + newAddress;
}