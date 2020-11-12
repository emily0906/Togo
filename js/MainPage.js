const NUM_COUPON_SECTIONS = 4;
var circles = []; // Circles.length = NUM_COUPON_SECTIONS
var couponSection = 1;
var curCouponSection = 0;

window.onload = function () {
    circleSetup();
    restaurantsNearYouSetup();
    rotateCouponSection(0);
    document.getElementById("restaurantAddress").value = "Search for a restaurant";
}

// Sets up the 3 circles so that the currently selected one will be more opague
function circleSetup() {
    circles = document.getElementsByClassName("circles");
}

function addressChange(input) {
    // Recall this function when the users location is changed
    setUserAddress(document.getElementById("deliveryAddress").value);
    setAddressLocation(); // The user has a new address location, get its location
    restaurantsNearYouSetup();

    // TESTING CART, when we change the address we will also modify the cart
    addContentsToCart("Vegetable Skewer");
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

    document.cookie = "history=" + locationName;

    // Redirect the user to another page
    window.location = "FoodItemDisplayer.html";
}
