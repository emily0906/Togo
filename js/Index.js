// When a key is pressed into the input field
// When the user pressed enter, they have entered their address into the system
function keyPressed(val) {
    if (event.key == 'Enter')
    {
        return submitAddress();
    }
}

function submitAddress() {
    // Remove prior memory [if any]
    window.localStorage.clear();

    var address = document.getElementById("search-field").value.trim();


    setUserAddress(address);
    return redirect();
}

// Redirect the user to the main page
function redirect() {
    window.location.href = "Main_Page.html", true;

    return false;
}