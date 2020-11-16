
// The address that the delivery will apply to
// Note that, this is only the default address
// The real address is taken from the cookie 'ADDRESS_COOKIE_KEY'
var address = "123 fake street";
var userLocation = 100;

const ADDRESS_STORAGE_KEY = "userAddress";
const FOOD_STORAGE_KEY = "foodOrder";

// Adds food to the cart
// To do this, we will append the new food items name to the cookie storing the users order
function addFoodToCartCookie(FoodItem) {
    if (FoodItem == null)
        alert("Sorry, this selection is invalid. Please try a different option. /0 bad value.");

    return addFoodToCartCookieByName(FoodItem.name);
}

function addFoodToCartCookieByName(FoodName) {
    if (FoodItem == null)
        alert("Sorry, this selection is invalid. Please try a different option. /0 bad value.");

    var foodItems = getFoodCookies();

    // No storage found, so we create the cookie with the food items name
    if (foodItems == "" || foodItems == null)
        foodItems = FoodName;
    else // Cookie was found, append the new food item to the cookie
        foodItems = foodItems + "," + FoodName;

    // Update the storage
    window.localStorage.setItem(FOOD_STORAGE_KEY, foodItems);

    return foodItems;
}


// Accepts a string to be removed from the cookies list
function removeFoodCartCookie(FoodName) {
    if (FoodName == null)
        alert("Sorry, this selection is invalid. Please try a different option. /0 bad value.");

    var foodItems = getFoodCookies();

    // No storage found, so there's nothing to remove
    if (foodItems == "" || foodItems == null)
        return;
    else // storage was found, remove an element of the name FoodName
    {
        var lastIndex = foodItems.lastIndexOf(FoodName);

        // With the last index, we now remove each character
        // Subtract 1 to remove comma
        var start;
        if (foodItems.charAt(lastIndex - 1) == ',')
            start = foodItems.substring(0, lastIndex - 1);
        else
            start = foodItems.substring(0, lastIndex);
        var end = foodItems.substring(lastIndex + FoodName.length, foodItems.length);

        // Combine the start and end of new string that excludes the items name
        foodItems = start.concat(end);
    }

    // Update the cookie
    window.localStorage.setItem(FOOD_STORAGE_KEY, foodItems);

    return foodItems;
}

function getFoodCookies() {
    return window.localStorage.getItem(FOOD_STORAGE_KEY);
}

// Gets the cookies storing the users current order
function getCurrentOrder() {
    return getFoodCookies();
}

function getUserAddress() {
    var addr = window.localStorage.getItem(ADDRESS_STORAGE_KEY);

    if (addr == null)
        return address;

    return addr;
}

function setUserAddress(newAddress) {
    var d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));

    //document.cookie = ADDRESS_COOKIE_KEY + '=' + newAddress + ";expires=" + d.toUTCString() + ";path=/";
    window.localStorage.setItem(ADDRESS_STORAGE_KEY, newAddress);
}