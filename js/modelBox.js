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
}

// Close the Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
    foodName = null;
}

function addingToCart() {
    if (foodName == null || foodName == "")
        alert("We're Sorry, a problem has occurred. Please try ordering a different product. /0");

    addContentsToCart(foodName);
    closeModal();
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