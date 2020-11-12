
// The address that the delivery will apply to
// Note that, this is only the default address
// The real address is taken from the cookie 'ADDRESS_COOKIE_KEY'
var address = "123 fake street";
var userLocation = 100;

const ADDRESS_COOKIE_KEY = 'userAddress';

function getUserAddress() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var keyValue = cookies[i].split("=");
        if (keyValue[0].trim() == ADDRESS_COOKIE_KEY)
            return keyValue[1];
    }

    // No cookies found, so we use default address instead
    return address;
}

function setUserAddress(newAddress) {
    document.cookie = ADDRESS_COOKIE_KEY + '=' + newAddress;
}