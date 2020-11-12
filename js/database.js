// List of all Food Items and their information
var foodItems = [
    new FoodItem("Mushroom Soup", "images/FoodItems/mushroomSoup.jpg", "Roughage Eatery",
        "Cashew creamy mushroom soup", "Cachews, mushrooms", 15.45, 4),
    new FoodItem("Banana Soup", "images/FoodItems/mushroomSoup.jpg", "Roughage Eatery",
        "Cashew creamy Banana soup, ew wtf", "Banana, mushrooms", 2.50, 4),
    new FoodItem("Mac & Cheeze", "images/FoodItems/mushroomSoup.jpg", "Roughage Eatery",
        "Mac and cheese mmmm", "mac and 10% cheese", 5, 5)
]

// List of all packages, and their information
var foodPackages = [
    new FoodPackage("Protein", "images/category1.jpg", new Menu(
        [
            foodItems[0], foodItems[1], foodItems[1]
        ]
        ))
];

// List of all restaurants and their information
var restaurants = [
    new Restaurant(0, "Roughage Eatery", "images/restaurants/Stellas.jpg",
        new Menu(
            {
                starters:
                [
                    foodItems[0],
                    foodItems[1]
                ],
                mains:
                [
                    foodItems[2]
                ]
            }
        ),
        210),

    new Restaurant(1, "Stellas", "images/restaurants/Earls.jpg", new Menu(
        {
            starters:
                [
                    foodItems[0],
                    foodItems[1]
                ],
            mains:
                [
                    foodItems[2]
                ]
        }
    ),
    200),
    new Restaurant(2, "Earls", "images/restaurants/Earls.jpg", null, 105),
    new Restaurant(3, "Gong Cha", "images/restaurants/Stellas.jpg", null, 21),
    new Restaurant(4, "Jolibee", "images/restaurants/Stellas.jpg", null, 80),
    new Restaurant(5, "Fion", "images/restaurants/Earls.jpg", "", 100),
    new Restaurant(6, "Smittys", "images/restaurants/Stellas.jpg", null, 50),
    new Restaurant(7, "Brah", "images/restaurants/Stellas.jpg", null, 33),
];

// A food package menu is the list of food items cooresponding with the package
function FoodPackage(name, image, menu) {
    this.name = name;
    this.image = image;
    this.menu = menu;

    // Get the menu of the food package
    this.GetMenu = function () {
        if (this.menu == null) {
            alert("Sorry, this restaurant currently has no menu. Please try a different restaurant.");
            return null;
        }

        return this.menu.menu;
    }
}

// The restaurant object
// The location of a restaurant is a single integer used to determine the distance to the user
function Restaurant(id, name, image, menu, location) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.menu = menu;
    this.location = location;

    // Get the menu of the restaurant
    this.GetMenu = function () {
        if (this.menu == null) {
            alert("Sorry, this restaurant currently has no menu. Please try a different restaurant.");
            return null;
        }

        return this.menu.menu;
    }
}

// A menu contains the list of all food items along with all information about the food item
function FoodItem(name, image, restaurantCreator, description, ingrediants, price, stars) {
    this.name = name;
    this.image = image;
    this.restaurant = restaurantCreator;
    this.description = description;
    this.ingrediants = ingrediants;
    this.price = price;
    this.stars = stars;
}

function getPackageByName(name) {
    for (var i = 0; i < foodPackages.length; i++) {
        if (foodPackages[i].name == name)
            return foodPackages[i];
    }

    return null;
}

function getRestaurantByName(name) {
    for (var i = 0; i < restaurants.length; i++) {
        if (restaurants[i].name == name)
            return restaurants[i];
    }

    return null;
}

// A menu object is defined by key value pairs
// The format of these key value is like so:
/*
    {
    heading1 : [FootItemList],
    heading2 : [FoodItemList],
    headingn : [FoodItemList]
    }
*/
// Where heading1 is the header for a list of food items
// For example, the 'breakfast' section on a menu, followeed by all fooditems in that list
function Menu(menuObject) {
    this.menu = menuObject;
}