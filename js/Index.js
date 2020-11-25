var address = null;
var saveState = "";

window.onload = function () {
    if (address == null)
        address = document.getElementById("search-field");
}

$('#form').submit(function (e) {
    alert("test");
    e.preventDefault();
    invalidInput();
});

// When a key is pressed into the input field
// When the user pressed enter, they have entered their address into the system
function keyPressed(val) {
    if (event.key == 'Enter' && correctFormat(address.value)) {
        saveState = address.value;
        return submitAddress();
    }
    else {
        var key = event.keyCode || event.charcode;
        if (key == 8) // Backspace
            correctFormat(address.value.substring(0, address.value.length - 1));
        else
            correctFormat(address.value + event.key)
    }
    /*
    API TESTINg, for an actual address
    Can be removed if not used

    // Obtained from https://docs.microsoft.com/en-us/bingmaps/rest-services/locations/find-a-location-by-address#examples
    // Using the api to verify for a real address
    if (address.value.length >= 3) {
        getAddress().then(
            data => (
                console.log(data)
                )
        );
    }
    */
}

function correctFormat(str) {
    var hasNumber = false;
    var hasWord = false;
    str = str.trim();
    if (str == "") {
        validInput();
        return false;
    }

    for (var i = 0; i < str.length; i++) {
        if (!hasNumber && str.charAt(i) >= '0' && str.charAt(i) <= '9') {
            hasNumber = true;
        }
        else if (!hasNumber && (str.charAt(i) < '0' || str.charAt(i) > '9')) {
            invalidInput();
            return false;
        }

        if (hasNumber && (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') || (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') && !hasWord)
        {
            hasWord = true;
        }

        // Can't have a number after the word
        if (hasWord && str.charAt(i) >= '0' && str.charAt(i) <= '9') {
            invalidInput();
            return false;
        }
    }

    // Show the user the problem after 4 numbers
    if (hasNumber && !hasWord && str.length > 4)
        invalidInput();

    if (hasWord && hasNumber) {
        validInput();
        return true;
    }

    return false;
}

/*
    API TESTING, for an actual address
    Getting the actual response from the APi as a JSON object
 * 
// Code snippet from https://levelup.gitconnected.com/all-possible-ways-of-making-an-api-call-in-plain-javascript-c0dee3c11b8b
async function getAddress() {
    let response = await fetch('http://dev.virtualearth.net/REST/v1/Locations/CA/Manitoba/?locality=' + address.value.trim() + '&maxResults=1&key=ArwDx4-VpPz6dyWwnHZg8Pp00fFMs6qqCmk1uf3Q9HhM9xaaiLXG9RwqK3O0lEBO');
    let data = await response.json();

    return data;
}
*/

function invalidInput() {
    document.getElementById("changeFeedback").style.display = "block";
}

function validInput() {
    document.getElementById("changeFeedback").style.display = "none";
}

function submitCheck() {
    if (correctFormat(address.value)) {
        submitAddress();
    }
    else
        invalidInput();
}

function submitAddress() {
    if (address == null) {
        invalidInput();
        return;
    }


    // Remove prior memory [if any]
    window.localStorage.clear();

    var userAddress = address.value.trim();

    setUserAddress(userAddress);
    return redirect();
}

// Redirect the user to the main page
function redirect() {
    window.location.href = "Main_Page.html", true;

    return false;
}