// List of all restaurants and their information
var restaurants = [
    new Restaurant(0, "Roughage Eatery", "images/restaurants/Stellas.jpg", "", 210),
    new Restaurant(1, "Stellas", "images/restaurants/Earls.jpg", "", 200),
    new Restaurant(2, "Earls", "images/restaurants/Earls.jpg", "", 105),
    new Restaurant(3, "Gong Cha", "images/restaurants/Stellas.jpg", "", 21),
    new Restaurant(4, "Jolibee", "images/restaurants/Stellas.jpg", "", 80),
    new Restaurant(5, "Fion", "images/restaurants/Earls.jpg", "", 100),
    new Restaurant(6, "Smittys", "images/restaurants/Stellas.jpg", "", 50),
    new Restaurant(7, "Brah", "images/restaurants/Stellas.jpg", "", 33),
];


// The restaurant object
// The location of a restaurant is a single integer used to determine the distance to the user
function Restaurant(id, name, image, menu, location) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.menu = menu;
    this.location = location;
}

// TODO: Each restaurant object needs a menu
// A menu contains the list of all food items along with all information about the food item