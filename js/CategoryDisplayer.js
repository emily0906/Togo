/*
    This class is now obsolete. Categories are no longer displayed on the Menu Pages.

var HISTORY_COOKIE = "history";
var HISTORY_DIVIDER = "/";

// In order for this file to work, there must be an element with an id called 'historyText'
function changeHistoryText() {
    var userLocation = getSpecificStorageValue(HISTORY_COOKIE);

    if (userLocation != null) {
        var t = document.getElementById("text1");

        if (t == null)
            alert("A problem has occurred. Please try again later. /2");
        else
            t.textContent = userLocation;
    }
    else
        alert("A problem has occured, the location is not yet defined. Please try a different restaurant or package.");
}

// Get a storage value given its key
// Returns null if none was found
function getSpecificStorageValue(storageKey) {
    return window.localStorage.getItem(storageKey);
}

*/