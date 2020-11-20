// List of all Food Items, and their information

var foodItems = [
    new FoodItem(0, "Mushroom Soup", "images/food/mushroomSoup.jpg", "Roughage Eatery",
        "Cashew creamy mushroom soup", "Cachews, mushrooms", 15.45, 4),
    new FoodItem(1, "Banana Soup", "images/food/mushroomSoup.jpg", "Roughage Eatery",
        "Cashew creamy Banana soup, ew wtf", "Banana, mushrooms", 2.50, 4),
    new FoodItem(2, "Baked Mac & Cheese", "images/food/Food - Mac&Cheese.jpg", "Roughage Eatery",
        "The finest grating in the city", "Elbow Macaroni, Olive Oil, Fine Cheddar, Monterey Jack, Parmesan", 5, 5),
    new FoodItem(3, "Chicken Burger", "images/food/Food - Chicken Burger.jpg", "Bobby's Buffalo Shack",
        "Organic Chicken Burger", "Letuce, Tomatoes, Bread, Chicken", 16.99, 3.8),
    new FoodItem(4, "Sushi", "images/Food - Sushi.jpg", "Ume Japanese",
        "Sushi", "Rice, Salmon", 12.00, 4.1),
    new FoodItem(5, "Crepe", "images/food/Food - Crepe.jpg", "Roughage Eatery",
        "Traditional Crepe", "Egg, Milk, Fruit", 8.99, 4.2),
    new FoodItem(6, "Asparagus Starter", "images/food/Food - Asparagus Green Starter.jpg", "Bobby's Buffalo Shack",
        "A Green Salad Starter", "Asparagus", 9.99, 3),
    new FoodItem(7, "Stuffed Tacos", "images/food/Food - Tacos.jpg", "Roughage Eatery",
        "A special set of tacos marinated with care", "Groundbeef, Tomatoes, Letuce, Corn, Sour Cream, Avacado, Green Pepper", 8.99, 5),
    new FoodItem(8, "Vegetable Skewer", "images/food/Food - Vegetable Skewer.jpg", "Bobby's Buffalo Shack",
        "A Skewer of Vegetables", "Vegtables", 9.99, 3.7),
    new FoodItem(9, "Potato Soup", "images/food/Food - Potato Soup.jpg", "Roughage Eatery",
        "Warm Potato Soup", "Potatoes", 12.99, 4.1 ),
    new FoodItem(10, "Cupcake", "image/food/Food - Cupcakes.jpg", "Roughage Eatery",
         "Chocolate Cupcakes", "Chocolate", 3.99, 4.6),
    new FoodItem(11, "Fried Spring Rolls", "images/food/Food - Fried Spring Rolls.jpg", "Roughage Eatery",
        "Fried Spring Rolls", "Been sprouts, Carro", 8.99, 4.3),
    new FoodItem(12, "Chicken Wings", "images/food/Food - Buffalo Wings.jpg", "Bobby's Buffalo Shack",
        "Spicey Chicken Wings", "Chicken", 7.99, 3.8),
    new FoodItem(13, "Edamame", "images/food/Food - Edamame.jpg", "Ume Japanese",
        "Edamame Soybeans", "Soybeans", 3.59, 3.6),
    new FoodItem(14, "Salmon Sushi", "images/food/Food - Shushi2.jpg", "Ume Japanese",
        "Sushi Wrapped in Salmon", "Rice, Salmon", 11.99, 3.6),
    new FoodItem(15, "Kale Sushi", "images/food/Food - Sushi3.jpg", "Ume Japanese",
        "Kale Sushi", "Kale, Rice", 12.99, 3.5),
    new FoodItem(16, "Brussels Sprouts", "images/food/Food - Brussel Sprouts.jpg", "Stellas",
        "Charred brussel sprouts with a garlic spicy-sweet asian glaze", "Brussel Sprouts, garlic, secret sauce (GF, Vegan)", 10.95, 5),
    new FoodItem(17, "Vietnamese Rice Noodles", "images/food/Food - Rice Noodles.jpg", "Pho Kim Tuong",
        "Noodles spiced so well it will bring you to a new season", "Spicy Rice Noodles, Pork, Avacado", 13.15, 5),
    new FoodItem(18, "Seafood Sushi", "images/food/Food - Sushi.jpg", "Ume Japanese",
        "A finely pieced seafood sushi dish", "Seasoned Rice, Smoked Salmon, Noodles, Sweet and Sour Sauce", 10.35, 5)
]

// List of all packages, and their information
var foodPackages = [
    new FoodPackage("Protein", "images/category1.jpg", new Menu(
        [
            foodItems[0], foodItems[1], foodItems[1]
        ]
        ))
];

// List of all restaurants, and their information
var restaurants = [
    new Restaurant(0, "Roughage Eatery", "images/restaurants/Stellas.jpg",
        new Menu(
            {
                Starters:
                [
                    foodItems[0],
                    foodItems[1]
                ],
                Mains:
                [
                    foodItems[2],
                    foodItems[7]
                ]
            }
        ),
        210),
    new Restaurant(1, "Bobby's Buffalo Shack", "images/Restaurant - Bobby's Buffalo Shack.jpg",
        new Menu(
            {
                Starters:
                [
                    foodItems[8],
                    foodItems[6]
                ],
                Mains:
                [
                    foodItems[3],
                    foodItems[12]

                ]

            }
        ),
        175),
    new Restaurant(2, "Ume Japanese", "images/restaurants/Earls.jpg",
        new Menu(
            {
                Starters:
                [
                    foodItems[13]
                ],
                Mains:
                [
                    foodItems[14],
                    foodItems[15],
                    foodItems[4],
                    foodItems[18]
                ]
            }
        ),
        105),
 
    new Restaurant(3, "Gong Cha", "images/restaurants/Stellas.jpg", null,21),
    new Restaurant(4, "Jolibee", "images/restaurants/Stellas.jpg",
        new Menu(
            {
                //pengyu's adding
                Mains:
                    [

                        foodItems[2],//baked hburger
                        foodItems[3],//chicken burger
                        foodItems[7],//stuffed tacos
                        foodItems[11],//fried spring rolls
                        foodItems[12],//chicken wings!!! my fav!!!
                        foodItems[16]//brussel sprouts
                    ]
            }
        )
        , 80),
    new Restaurant(5, "Fion", "images/restaurants/Earls.jpg", "", 100),
    new Restaurant(6, "Smittys", "images/restaurants/Stellas.jpg", 
        new Menu(
            {
                //pengyu's adding
                Starters:
                    [
                        foodItems[6],//asparagus

                    ]
                    
            }
        )
        , 50),
  
    new Restaurant(7, "Pho Kim Tuong", "images/restaurants/Stellas.jpg",
        new Menu(
            {
                //pengyu's adding
                //viet restaurants
                Starters:
                    [
                        foodItems[0],//mushroom soup
                        foodItem[1],//banana soup
                        foodItems[9]//potato soup
                    ],
                Mains:
                    [
                        foodItems[17],//viet rice noodles
                    ]
            }
        ),
        33),
    new Restaurant(8, "Stellas", "images/restaurants/Stellas.jpg",
        new Menu(
            {
                //pengyu's adding
                //breakfast restaurant
                Mains:
                    [
                        foodItems[16],//brussels sprouts
                        foodItems[12],//chicken wings
                        foodItems[10],//cupcake
                    ]
            },
        ),
        63)
    //new Restaurant(9,"Golden Loong","images/restaurants/GoldenLoong.jpg",null,10),
];

// List of all coupons, and their information
// This only contains the description of each coupon
// For the purposes of the project, the coupons are 'hard coded'
var coupons = ["Buy 1 get 1 Free", "5% off any order", "$5 off any order", "$10 off over $100"];

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
function FoodItem(id, name, image, restaurantCreator, description, ingrediants, price, stars) {
    this.id = id;
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

function getFoodItemByName(name) {
    for (var i = 0; i < foodItems.length; i++) {
        if (foodItems[i].name == name)
            return foodItems[i];
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
