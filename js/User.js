
// The address that the delivery will apply to
// Note that, this is only the default address
// The real address is taken from the cookie 'ADDRESS_COOKIE_KEY'
var address = "123 fake street";
var userLocation = 100;

const ADDRESS_STORAGE_KEY = "userAddress";
const FOOD_STORAGE_KEY = "foodOrder";

// Adds food to the cart
// To do this, we will append the new food items name to the cookie storing the users order
function addFoodToCartCookie(FoodItem, foodInstructions) {
    if (FoodItem == null || foodInstructions == null)
        alert("Sorry, this selection is invalid. Please try a different option. /0 bad value.");

    return addFoodToCartCookieByName(FoodItem.name + '/' + foodInstructions);
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
        if (lastIndex == -1)
            alert("Sorry but the item could not be removed. Please try again later");

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

/*
    Removes a food by the given name
    This will first check if there are any instructions with the same name contained in the foodName
    If there is, remove that
    If there is not,
    then check if the food exists for that type and remove it [with any instruction, empty is the highest priority]
    Returns all food items after the removal
*/
function removeItemByNameInstrCheck(foodName) {
    if (foodName == null)
        alert("Sorry, this selection is invalid. Please try a different option. /0 bad value.");

    var foodItems = getFoodCookies();

    // No storage found, so there's nothing to remove
    if (foodItems == "" || foodItems == null)
        return;

    var lastIndex = foodItems.lastIndexOf(foodName);

    // If the foodName and instructions are directly connected with another, remove that one
    if (lastIndex >= 0 && ((lastIndex + foodName.length) == foodItems.length || foodItems.charAt(lastIndex + foodName.length) == ',')) {

        // With the last index, we now remove each character
        // Subtract 1 to remove comma
        var start;
        if (foodItems.charAt(lastIndex - 1) == ',')
            start = foodItems.substring(0, lastIndex - 1);
        else
            start = foodItems.substring(0, lastIndex);
        var end = foodItems.substring(lastIndex + foodName.length, foodItems.length);

        // Combine the start and end of new string that excludes the items name
        foodItems = start.concat(end);
    }
    else {
        // The special instructions do not match
        // Now we must search manually and determine candidates
        var allItems = foodItems.split(',');
        var itemName = foodName.split('/')[0].trim();
        var candidates = [];
        var removed = false;

        // Go through list
        for (var i = 0; i < allItems.length; i++) {
            if (allItems[i] == '')
                continue;

            var candidateTest = allItems[i].split('/')[0].trim();

            if (candidateTest == itemName) {
                // check if there are no instructions here [If there are, remove that]
                if (allItems[i].split('/')[1].trim() == "" || allItems[i].split('/')[1].trim() == ",") {
                    // Remove this item!
                    foodItems = foodItems.replace(allItems[i], "");
                    removed = true;
                    break;
                }
                else {
                    candidates.push(allItems[i]);
                }
            }
        }

        // No item removed yet, pick any candidates
        if (!removed) {
            // Nothing to remove
            if (candidates.length == 0)
                return;
            else {
                foodItems = foodItems.replace(candidates[0], "");
            }
        }
    }

    // Remove any excess commas
    if (foodItems.indexOf(',,') != -1)
        foodItems = foodItems.replaceAll(",,", ",");

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

// Returns true if the user has the food item in their cart
function hasFoodItem(foodName) {
    var items = window.localStorage.getItem(FOOD_STORAGE_KEY);

    if (items == null)
        return false;

    var food = items.split(',');
    for (var i = 0; i < food.length; i++)
        if (food[i].split('/')[0] == foodName) {
            return true;
        }

    return false;
}