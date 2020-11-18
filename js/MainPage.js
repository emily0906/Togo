const NUM_COUPON_SECTIONS = 4;
var circles = []; // Circles.length = NUM_COUPON_SECTIONS
var couponSection = 1;
var curCouponSection = 0;

window.onload = function () {
    circleSetup();
    setAddressLocation();
    restaurantsNearYouSetup();
    rotateCouponSection(0);
    document.getElementById("restaurantAddress").value = "";

    // Load currently added coupon (if any)
    var coupon = window.localStorage.getItem("coupon");

    if (coupon != null)
        addCoupon(null, parseInt(coupon));
}

$(document).click(function (event) {
    var $target = $(event.target);
    if (!$target.closest('#search').length &&
        $('#restaurantsFromSearch').is(":visible")) {
        $('#restaurantsFromSearch').hide();
    }

    if (!$target.closest('#top').length &&
        $('#cartPopUp').is(":visible")) {
        closeCart();
    }
});



// Sets up the 3 circles so that the currently selected one will be more opague
function circleSetup() {
    circles = document.getElementsByClassName("circles");
}

function flushSuggestedSearches() {
    var elem = document.getElementById("restaurantsFromSearch");
    if (typeof elem !== 'undefined' && elem != null) {
        elem.parentElement.removeChild(elem);
    }
}

// This function displays restaurants that the user is searching for
function displayRelatedRestaurants(obj, event) {
    // Remove any previous searches from list
    flushSuggestedSearches();

    var text = obj.value;

    if (typeof event !== 'undefined') {
        // Check for backspace character
        if (event.keyCode == 8)
            text = text.substring(0, text.length - 1);
        else {
            text = text + String.fromCharCode(event.keyCode);
        }

        // Do not display any form of empty text
        // Note that without this, all restaurants will display
        if (text.trim() == "")
            return;
    }
    else if (text == "")
        return; // Do not display empty text without a backspace character

    // Find the suggested restaurants based on the users input
    var candidateRestaurants = [];

    for (var i = 0; i < restaurants.length; i++) {
        if (restaurants[i].name.toLowerCase().startsWith(text.trim().toLowerCase())) {
            candidateRestaurants.push(restaurants[i].name);
        }
    }

    // Now sort them in order
    candidateRestaurants.sort();

    // Create the suggestions
    createSuggestions(candidateRestaurants);
}

// Creates the suggested searches from a list of restaurants
function createSuggestions(suggestedRestaurants) {
    var elem = document.getElementById("search");
    var div = document.createElement("div");
    div.id = "restaurantsFromSearch";
    for (var i = 0; i < suggestedRestaurants.length; i++) {

        // Creating object
        var name = document.createElement("div");
        name.innerHTML = suggestedRestaurants[i];
        name.className = "suggestedName";
        div.appendChild(name);

        // Create on click event for object
        name.onclick = function (event) {
            redirectToRestaurantByName(event.target.textContent.trim());
        }
    }

    elem.appendChild(div);
}

function addressChange(input) {
    // Recall this function when the users location is changed
    setUserAddress(document.getElementById("deliveryAddress").value);
    setAddressLocation(); // The user has a new address location, get its location
    restaurantsNearYouSetup();
}

// This grabs the location of the user
// It will convert the address into ASCII, and sum each element.
// Multiplying each numeric value by 2
function setAddressLocation() {
    var sum = 0;

    var addr = getUserAddress();
    for (var i = 0; i < addr.length; i++) {
        if (isNaN(parseInt(addr.charAt(i)))) {
            // Not a number
            sum += addr.codePointAt(i) / 10;
        }
        else {
            sum += parseInt(addr.charAt(i)) * 2;
        }
    }

    userLocation = sum;
}

function restaurantsNearYouSetup() {
    var htmlIcon = document.getElementById("restaurantRow");

    var icons = [];
    for (var i = 0; i < htmlIcon.childNodes.length; i++)
        if (htmlIcon.childNodes[i].className == "col")
            icons.push(htmlIcon.childNodes[i]);

    // Set the order of the restaurants based on the distance to the user
    if (icons.length > restaurants.length)
        alert("Error, please make sure that we can display enough restaurants.");

    // Order the restaurants randomly
    var distances = [];

    // Order restaurants by distance to the user
    for (var i = 0; i < restaurants.length; i++) {

        var minDist;

        // Grab a dist not currently selected
        // FIXME can be optimized into a sort
        for (var i = 0; i < restaurants.length; i++)
            if (!distances.includes(restaurants[i])) {
                minDist = i;
                break;
            }

        // Grab next shortest distance
        for (var k = 0; k < restaurants.length; k++) {
            if (k != i && !(distances.includes(restaurants[k]))) {
                if (Math.abs(restaurants[k].location - userLocation) < Math.abs(restaurants[minDist].location - userLocation))
                    minDist = k;
            }
        }

        distances.push(restaurants[minDist]);
    }

    for (var i = 0; i < icons.length; i++) {
        // Set the childs equal to the restaurants information
        var childs = icons[i].childNodes;
        for (var k = 0; k < childs.length; k++) {
            for (var l = 0; l < childs[k].childNodes.length; l++) {

                var child = childs[k].childNodes[l];
                if (child.tagName == "IMG") {
                    child.src = distances[i].image;
                }
                else if (child.tagName == "DIV") {
                    child.textContent = distances[i].name;
                }

            }
        }
    }
}

function addCoupon(obj, index) {
    var addedToCartOverlays = document.getElementsByClassName("addOverlay");
    var addWarnings = document.getElementsByClassName("addWarning");

    if (addedToCartOverlays.length != addWarnings.length)
        alert("Sorry, a problem has occurred. Please try something else. /0")

    for (var i = 0; i < addedToCartOverlays.length; i++) {
        var elem = addedToCartOverlays[i];

        // The coupon that is added
        // Note that changing visibility dynamically breaks the :hover in css
        // So, here I just modify opacity and let CSS handle visibility for the warnings
        // And for the overlay, I only modify opacity and let CSS handle visibility
        if (i == index) {

            // Different text if the user comes back to the page
            // This way 'added to your cart' is the action of doing it from that page
            if (obj != null)
                elem.textContent = "Added to your cart";
            else
                elem.textContent = "Currently in your cart";

            elem.style.color = "red";
            elem.style.fontWeight = "700";
            elem.style.opacity = "0.9";
            elem.style.visibility = "visible";
            addWarnings[i].style.opacity = "0";

            // Saving the current coupon
            window.localStorage.setItem("coupon", index);
        }
        else {
            // All other coupons
            // Set back to defaults
            elem.textContent = "Add to cart";
            elem.style.color = "rgb(53, 53, 53)";
            elem.style.fontWeight = "300";
            elem.style.visibility = "hidden";

            // Add a warning for other coupons. This will remove the current coupon
            addWarnings[i].style.opacity = "1.0";

            // To retain CSS's hover attributes, we will redefine the className
            elem.className = "addOverlay";
        }
    }


}

// Move the coupon section to a specific coupon
function rotateCouponToIndex(index) {
    rotateCouponSection(index - curCouponSection);
}

function rotateCouponSection(amount) {
    if (typeof (circles) == undefined)
        alert("An error has occurred. Please try again later.");

    var slides = document.getElementsByClassName("slide");

    // Disabling the current slide
    slides[curCouponSection].style.display = "none";
    circles[curCouponSection].style.opacity = "0.9";

    curCouponSection = mod((curCouponSection + amount), NUM_COUPON_SECTIONS);

    // Activating next slide
    slides[curCouponSection].style.display = "inline-block";
    circles[curCouponSection].style.opacity = "0.2";
}

// Customized modulo to evaluate positive only numbers
// Returns a % b, result is always positive
function mod(a, b) {
    return ((a % b) + b) % b;
};

// Redirect the user to the FoodItemDisplayer page
// This may either be to display a restaurants menu
// Or, to display the products in a particular package
function redirectToMenuPage(event) {
    var locationName;

    // Grab name of the package/food/restaurant from the onclick event
    for (var i = 0; i < event.childNodes.length; i++) {
        if ("DIV" == event.childNodes[i].tagName)
            locationName = event.childNodes[i].textContent;
    }
    window.localStorage.setItem("history", locationName);

    // Redirect the user to another page
    window.location = "FoodItemDisplayer.html";
}

function redirectToRestaurantByObject(obj) {
    window.localStorage.setItem("history", obj.textContent);

    // Redirect the user to another page
    window.location = "FoodItemDisplayer.html";
}

function redirectToRestaurantByName(restaurantName) {
    window.localStorage.setItem("history", restaurantName);

    // Redirect the user to another page
    window.location = "FoodItemDisplayer.html";
}
