var HISTORY_COOKIE = "history";
var HISTORY_DIVIDER = "/";

// In order for this file to work, there must be an element with an id called 'historyText'
function changeHistoryText() {
    var elements = document.getElementsByClassName("historyT");
    var userLocation = getSpecificCookieValue(HISTORY_COOKIE);

    if (userLocation != null) {
        var tabNames = userLocation.split(HISTORY_DIVIDER);
        var spanElements = [];

        // Grab all span elements
        for (var k = 0; k < elements.length; k++)
            for (var i = 0; i < elements[k].childNodes.length; i++) {
                if ("SPAN" == elements[k].childNodes[i].tagName) {
                    spanElements.push(elements[k].childNodes[i]);
                }
            }

        var emptyArrows = getArrElementByName(spanElements, "divider");
        if (emptyArrows == null) {
            alert("A problem has occurred. Please try again later. /0");
            return;
        }

        var t1 = getArrElementByName(spanElements, "text1");
        var t2 = getArrElementByName(spanElements, "text2");

        if (t1 == null)
            alert("A problem has occurred. Please try again later. /1");
        else
            t1.textContent = tabNames[0];

        if (t2 == null )
            alert("A problem has occurred. Please try again later. /2");

        // Remove arrows if theres only 1 text of history
        if (tabNames.length == 1) {
            emptyArrows.style.display = "none";
            t2.style.display = "none";
            itemsSection = t1.textContent;
        }
        else {
            emptyArrows.style.displayer = "block";
            t2.textContent.style.display = "block";

            t2.textContent = tabNames[1];
        }
    }
}

function getArrElementByName(array, name) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id == name)
            return array[i];
    }

    return null;
}

// Get a cookies value given its key
// Returns null if none was found
function getSpecificCookieValue(cookieKey) {
    var cookies = document.cookie;

    var cookieSplit = cookies.split(";");

    for(var i = 0; i < cookieSplit.length; i++)
    {
        var keyValue = cookieSplit[i].split("=");
        if (keyValue[0].trim() == cookieKey)
            return keyValue[1];
    }

    return null;
}