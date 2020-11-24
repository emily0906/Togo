var foodName;

// Obtained from https://stackoverflow.com/questions/1726630/formatting-a-number-with-exactly-two-decimals-in-javascript
// Formatting a number to an exact 2 decimals following currency
var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

// Open the Modal
function openModal() {
    document.getElementById("modal").style.display = "block";

    var itemInCart = hasFoodItem(foodName); // Check if they already have the item in their cart

    if (itemInCart) {
        document.getElementById("removeButton").style.display = "inline-block";
        document.getElementById("buttons").style.width = "95%";
    }
    else {
        document.getElementById("removeButton").style.display = "none";
        document.getElementById("buttons").style.width = "65%";
    }
}

// Close the Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
    foodName = null;
}

// Removing item from the cart
function removeFromCart() {
    if (foodName == null || foodName == "")
        alert("We're Sorry, a problem has occurred. Please try ordering a different product. /0");

    // Check for special instructions
    var instructions = document.getElementById("instructions").value;

    if (instructions.trim() != "")
        removeCartItemByName(foodName + '/' + instructions);
    else
        removeCartItemByName(foodName + '/');

    addedToCartFeedbackAnimation(false);
    closeModal();
}

function addingToCart() {
    if (foodName == null || foodName == "")
        alert("We're Sorry, a problem has occurred. Please try ordering a different product. /0");

    // Check for special instructions
    var instructions = document.getElementById("instructions").value;

    if (instructions.trim() != "")
        addContentsToCart(foodName + '/' + instructions);
    else
        addContentsToCart(foodName + '/');

    addedToCartFeedbackAnimation(true);
    closeModal();
}

// Creates the animation to display something to the cart
// Accepts the parameter isAdding
// If isAdding is true the text will show 'added to your cart'
// Otherwise, the tetxt is 'removed from your cart'
function addedToCartFeedbackAnimation(isAdding) {
    var text = document.getElementById("popUpText");

    if (window.getComputedStyle(text.parentNode).display === 'none') {
        if (isAdding)
            text.textContent = "An item is added!";
        else
            text.textContent = "An item is removed!";

        $("#popUpBox").fadeIn("slow", function () {
            $("#popUpBox").fadeOut(4500, function () {
                // Do nothing once complete
            });
        });
    }
}

/*
    Initialize everything in the modal
    Given an object, initialize its attribute
    Passes a true of false boolean to determine if the setup was dynamically generated or not
*/
function setupModal(obj, isDynamic) {
    var nodes = null;

    if (!isDynamic)
        nodes = obj.parentNode.childNodes;
    else
        nodes = obj.childNodes;

    foodName = null;

    // For non-dynamic elements, we will grab the first 'div' element
    if (!isDynamic)
        for (var i = 0; i < nodes.length; i++) {
            if ("DIV" == nodes[i].tagName)
                foodName = nodes[i].textContent;
        }
    // For dynamic elements, we will grab the element with the id 'title'
    else if (isDynamic)
        for (var i = 0; i < nodes.length; i++) {
            if ("title" == nodes[i].id)
                foodName = nodes[i].textContent;
        }

    if (foodName == null || foodName == "" || (!isDynamic && nodes == null))
        alert("We're Sorry, a problem has occurred. Please try ordering a different product. /1");

    var foodItem = getFoodItemByName(foodName);

    // Fill all details of the Modal from the Food Item
    document.getElementById("modalTitle").textContent = foodItem.restaurant;
    document.getElementById("modal-content").src = foodItem.image;
    document.getElementById("dishDescription").textContent = foodItem.description;
    document.getElementById("dishIngrediants").textContent = foodItem.ingrediants;
    document.getElementById("foodName").textContent = foodItem.name;
    document.getElementById("foodPrice").textContent = "$" + formatter.format(foodItem.price);
}