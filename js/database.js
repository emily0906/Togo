// List of all Food Items and their information

var foodItems = [
    new FoodItem("Mushroom Soup", "images/FoodItems/mushroomSoup.jpg", "Roughage Eatery",
        "Cashew creamy mushroom soup", "Cachews, mushrooms", 15.45, 4),
    new FoodItem("Banana Soup", "images/FoodItems/mushroomSoup.jpg", "Roughage Eatery",
        "Cashew creamy Banana soup, ew wtf", "Banana, mushrooms", 2.50, 4),
    new FoodItem("Mac & Cheeze", "images/FoodItems/mushroomSoup.jpg", "Roughage Eatery",
        "Mac and cheese mmmm", "mac and 10% cheese", 5, 5),
    new FoodItem("Chicken Burger", "images/Foo - Chicken Burger.jpg", "Bobby's Buffalo Shack", 
        "Organic Chicken Burger", "Letuce, Tomatoes, Bread, Chicken", 16.99, 3.8), 
    new FoodItem("Sushi", "images/Food - Sushi.jpg", "Ume Japanese",
        "Sushi", "Rice, Salmon", 12.00, 4.1), 
    new FoodItem("Crepe", "images/Food - Crepe.jpg", "Roughage Eatery", 
        "Traditional Crepe", "Egg, Milk, Fruit", 8.99, 4.2), 
    new FoodItem("Asparagus Starter", "images/Food - Asparagus Green Starter.jpg", "Bobby's Buffalo Shack",
        "A Green Salad Starter", "Asparagus", 9.99, 3), 
    new FoodItem("Tacos", "images/Food - Tacos.jpg", "Roughage Eatery",
        "Basic Tacos", "Groundbeef, Tomatoes, Letuce, Corn", 4.99, 3.8),  
    new FoodItem("Vegetable Skewer", "images/Food - Vegetable Skewer.jpg", "Bobby's Buffalo Shack",
        "A Skewer of Vegetables", "Vegtables", 9.99, 3.7),   
    new FoodItem("Potato Soup", "images/Food - Potato Soup.jpg", "Roughage Eatery",
        "Warm Potato Soup", "Potatoes", 12.99, 4.1 ),  
    new FoodItem("Cupcake", "image/Food - Cupcakes.jpg", "Roughage Eatery",
         "Chocolate Cupcakes", "Chocolate", 3.99, 4.6), 
    new FoodItem("Fried Spring Rolls", "images/Food - Fried Spring Rolls.jpg", "Roughage Eatery", 
        "Fried Spring Rolls", "Been sprouts, Carro", 8.99, 4.3),
    new FoodItem("Chicken Wings", "images/Food - Buffalo Wings.jpg", "Bobby's Buffalo Shack", 
        "Spicey Chicken Wings", "Chicken", 7.99, 3.8), 
    new FoodItem("Edamame", "images/Food - Edamame.jpg", "Ume Japanese", 
        "Edamame Soybeans", "Soybeans", 3.59, 3.6), 
    new FoodItem("Salmon Sushi", "images/Food - Shushi2.jpg", "Ume Japanese", 
        "Sushi Wrapped in Salmon", "Rice, Salmon", 11.99, 3.6), 
    new FoodItem("Kale Sushi", "images/Food - Sushi3.jpg", "Ume Japanese", 
        "Kale Sushi", "Kale, Rice", 12.99, 3.5)
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

    new Restaurant(1, "Bobby's Buffalo Shack", "images/Restaurant - Bobby's Buffalo Shack.jpg", 
        new Menu(
            {
                starters: 
                [
                    foodItems[8],
                    foodItems[6]
                ],
                mains:
                [
                    foodItems[3],
                    foodItem[12]

                ]

            }
        ), 
        175),
    new Restaurant(2, "Ume Japanese", "images/restaurants/Earls.jpg", 
        new Menu(
            {
                starters:
                [
                    foodItems[13]
                ],
                mains:
                [
                    foodItems[14],
                    foodItems[15],
                    foodItems[4],

                ]
            }
        ), 105),
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
    Menu :
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