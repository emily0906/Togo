// Requires User.js class

// Changing address of delivery
function displayAddressOnCheckout() {
    document.getElementById("addressDisplayed").textContent = "Delivering To: " + getUserAddress();
}

function addressKeyPress(elem) {

    if (correctFormat(document.getElementById("deliveryAddress").value)) {
        if (event.key === 'Enter') {
            addressChange();
        }
    }
}

function addressSubmitCheck() {
    if (correctFormat(document.getElementById("deliveryAddress").value)) {
        validInput();
        addressChange();
    }
    else
        invalidInput();
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