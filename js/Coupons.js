/* 
    Coupons informations are stored in the Database.js file 
    This file will compute and return the information that a coupon will apply, if a user has a coupon
    Assumption: A user should already have a coupon before calling any of these function, otherwise they will alert a failure
*/
function GetTotalCouponPrice(couponIndex, currentPrice) {
    switch (couponIndex) {
        case 0:
            return couponOne(currentPrice);
        case 1:
            return couponTwo(currentPrice);
        case 2:
            return couponThree(currentPrice);
        case 3:
            return couponFour(currentPrice);
    }

    return 0.00;
}

// Buy 1 get 1 free
function couponOne(currentPrice) {
    /*
        First we will grab the ordered food items and count them.
        The most expensive item with 2 or more orders will have one free.
    */

    // Each item is split by comma
    var food = getFoodCookies().split(",");

    // Counting any duplicates 
    var nonDupes = [];
    var dupeCount = []; // The number of elements, cooresponds to the index of nonDupes

    for (var i = 0; i < food.length; i++) {
        if (food[i] == "" || food[i] == null) // Remove any Empty split
            continue;

        var index = nonDupes.indexOf(food[i]);
        if (index != -1) {
            dupeCount[index]++;
        }
        else {
            nonDupes.push(food[i]);
            dupeCount.push(1);
        }
    }

    var curMax = 0;
    // Grabbing most exepsive item with 2 or more orders
    for (var i = 0; i < nonDupes.length; i++) {
        var item = getFoodItemByName(nonDupes[i]);
        if (dupeCount[i] >= 2 && item.price > curMax)
            curMax = item.price;
    }

    if (curMax == 0)
        return currentPrice;
    else
        return currentPrice - curMax;
}

// 5% off any order
function couponTwo(currentPrice) {
    return currentPrice * 0.95;
}

// $5 off any order
function couponThree(currentPrice) {
    if (currentPrice <= 5)
        return 0;

    return currentPrice - 5;
}

// 10% off an order over $100
function couponFour(currentPrice) {
    if (currentPrice >= 100) {
        return currentPrice - 10;
    }

    return currentPrice;
}

function getCouponNote(couponIndex) {
    switch (couponIndex) {
        case 0:
            return "In order to receive a free item you must order 2 of the same items. The most expensive item ordered twice or more will be free. Taxes still applies."
        case 1:
            return "In order to receive 5% off your order your order must exceed $0.05";
        case 2:
            return "In order to receive $5 off your order your order must exceed $0.00."
        case 3:
            return "In order to receive $10 off your order the order must have a total price of $100.00 or more."
    }

    return "Coupon not applied due to an error. Please try again later. Sorry for the inconvenience.";
}