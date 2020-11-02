// Assumption: Jquery is already imported
$(document).ready(function () {
    displayAddress();
});

function displayAddress() {
    try {
        document.getElementById("deliveryAddress").value = address;
    } catch (err) {
        alert("Please include User.js before IncludeTop.js.\nThey are dependant on one another.");
    }
}

// Called when the user enters a new address in the address bar
function modifyAddress(input) {
    try {
        address = input.trim();
    } catch (err) {
        alert("Please include User.js before IncludeTop.js.\nThey are dependant on one another.");
    }
}