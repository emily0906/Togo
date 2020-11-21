var itemsSection;
var HISTORY_COOKIE = "history";

window.onload = function () {
    document.getElementById("restaurantAddress").value = "Search for a restaurant";
    displayFoodItems();
    openNotification();
}

$(document).click(function (event) {
    var $target = $(event.target);

    if (!$target.closest('#top').length &&
        $('#cartPopUp').is(":visible")) {
        closeCart();
    }
});

function openNotification() {
    var notification = window.localStorage.getItem('notification');

    if (notification == 'true')
        document.getElementById('cartNotification').style.visibility = 'visible';
}

// Dynamically display the food items
function displayFoodItems() {
    var itemsSection = getSpecificStorageValue(HISTORY_COOKIE);
    var restaurant = getRestaurantByName(itemsSection);
    var menuText = document.getElementById("text1");

    if (restaurant != null) {
        createRestaurantMenu(restaurant.GetMenu());
        menuText.textContent = itemsSection + "'s Menu";
    }
    else {
        // Check if they instead clicked on a food package
        if (itemsSection != null) {
            var package = getPackageByName(itemsSection);
            menuText.textContent = itemsSection + " Food Package";
            if (package == null)
                alert("Sorry, the selection you have made is empty. Please try another options in the home page.");
            else
                createPackageMenu(package.GetMenu());
        }
        else {
            alert("Sorry, the selection you have made is empty. Please try another options in the home page.");
        }
    }
}

function createPackageMenu(packageMenu) {
    var header = document.getElementById("bodyComponents");

    for (var i = 0; i < packageMenu.length; i++) {
        createFoodItem(packageMenu[i], true, header);
    }
}

function addressChange(input) {
    // Recall this function when the users location is changed
    setUserAddress(document.getElementById("deliveryAddress").value);

    addressFeedbackAnimation();
}

function addressFeedbackAnimation() {
    $("#changeFeedback").fadeIn("slow", function () {
        $("#changeFeedback").fadeOut(5500, function () {
            // Do nothing once complete
        });
    });
}

// Dynamically create the menu of a restaurant
function createRestaurantMenu(restaurantMenu) {
    var headers = Object.keys(restaurantMenu);

    for (var i = 0; i < headers.length; i++) {
        // Create the header element
        var header = createHeader(headers[i]);
        var itemsInHeader = restaurantMenu[headers[i]];

        // Create the food item for each header
        for (var k = 0; k < itemsInHeader.length; k++)
            createFoodItem(restaurantMenu[headers[i]][k], false, header);
    }
}

// Create the header element, and append it to the body
function createHeader(name) {
    var elem = document.getElementById("bodyComponents");

    var child = document.createElement("span");
    var text = document.createElement("div");

    text.innerHTML = name;
    child.className = "section";
    text.className = "block";
    child.appendChild(text);
    elem.appendChild(child);

    return child;
}

// Obtained from https://stackoverflow.com/questions/1726630/formatting-a-number-with-exactly-two-decimals-in-javascript
// Formatting a number to an exact 2 decimals following currency
var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

// Create a food item to be displayed on the page
// Pass a boolean includeLocation to include the location or not
// Pass a header, which is the id of the element everything will be appended under
function createFoodItem(foodItem, includeLocation, header) {

    // Initializing elements
    var img = document.createElement("img");
    var title = document.createElement("span");
    var price = document.createElement("span");
    var location = document.createElement("span");
    var description = document.createElement("span");
    var ingrediants = document.createElement("span");
    var child = document.createElement("div");

    // Setting class and id names
    // This step is necessary so CSS can locate the elements
    child.className = "foodItem";
    title.id = "title";
    price.id = "price";
    location.id = "location";
    description.id = "description";
    ingrediants.id = "ingrediants";

    // Setting the values of the elements
    img.src = foodItem.image;
    title.innerHTML = foodItem.name;
    price.innerHTML = "$" + formatter.format(foodItem.price);

    if (includeLocation)
        location.innerHTML = foodItem.restaurant;

    description.innerHTML = foodItem.description;
    ingrediants.innerHTML = foodItem.ingrediants;

    // Setting parents
    child.appendChild(img);
    child.appendChild(title);
    child.appendChild(price);
    child.appendChild(location);
    child.appendChild(description);
    child.appendChild(ingrediants);
    child.onclick = function () { setupModal(this, true); openModal(); }
    header.appendChild(child);
}

function sendToMainPage() {
    window.localStorage.removeItem(HISTORY_COOKIE);

    // Redirect the user to another page
    window.location = "Main_Page.html";
}

// Get a storage value given its key
// Returns null if none was found
function getSpecificStorageValue(storageKey) {
    return window.localStorage.getItem(storageKey);
}

function addressKeyPress(elem) {
    if (event.key === 'Enter') {
        addressChange();
    }
}

// For food packages
function redirectToRestaurantByObject(obj) {
    window.localStorage.setItem("history", obj.textContent);

    // Redirect the user to another page
    window.location = "FoodItemDisplayer.html";
}