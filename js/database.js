// List of all Food Items, and their information

var foodItems = [
    new FoodItem(0, "Mushroom Soup", "images/food/Mushroom_Soup.jpg", "Roughage Eatery",
        "Cashew creamy mushroom soup", "Cachews, mushrooms", 15.45, 4),
    new FoodItem(1, "Veggie Chicken Broth", "images/food/VeggieChickenBroth.jpg", "Roughage Eatery",
        "Chicken broth with vegtables for a perfect starter", "Chicken, Chicken Broth, Carrots, Parsley, Celerey", 7.50, 4),
    new FoodItem(2, "Baked Mac & Cheese", "images/food/Food - Mac&Cheese.jpg", "Roughage Eatery",
        "The finest grating in the city", "Elbow Macaroni, Olive Oil, Fine Cheddar, Monterey Jack, Parmesan", 5, 5),
    new FoodItem(3, "Chicken Burger", "images/food/Food - Chicken Burger.jpg", "Bobby's Buffalo Shack",
        "Organic Chicken Burger", "Letuce, Tomatoes, Bread, Chicken", 16.99, 3.8),
    new FoodItem(4, "Veggie Sushi", "images/food/vegSushi.jpeg", "Ume Japanese",
        "Sushi with prime veggies", "Rice, Carrots, Avacado", 12.00, 4.1),
    new FoodItem(5, "Crepe", "images/food/Food - Crepe.jpg", "Roughage Eatery",
        "Traditional Crepe", "Egg, Milk, Fruit", 8.99, 4.2),
    new FoodItem(6, "Asparagus Starter", "images/food/Food - Asparagus Green Starter.jpg", "Bobby's Buffalo Shack",
        "A green salad starter", "Asparagus", 9.99, 3),
    new FoodItem(7, "Stuffed Tacos", "images/food/Food - Tacos.jpg", "Roughage Eatery",
        "A special set of tacos marinated with care", "Groundbeef, Tomatoes, Letuce, Corn, Sour Cream, Avacado, Green Pepper", 8.99, 5),
    new FoodItem(8, "Vegetable Skewer", "images/food/Food - Vegetable Skewer.jpg", "Bobby's Buffalo Shack",
        "A Skewer of Vegetables", "Vegtables", 9.99, 3.7),
    new FoodItem(9, "Potato Soup", "images/food/Food - Potato Soup.jpg", "Roughage Eatery",
        "Warm Potato Soup", "Potatoes", 12.99, 4.1 ),
    new FoodItem(10, "Cupcake", "images/food/CupCakes.jpg", "Roughage Eatery",
         "Chocolate Cupcakes", "Chocolate, Milk, Icing", 6.99, 4.6),
    new FoodItem(11, "Fried Spring Rolls", "images/food/Food - Fried Spring Rolls.jpg", "Gong Cha",
        "Fried Spring Rolls", "Been sprouts, Carrots", 8.99, 4.3),
    new FoodItem(12, "Chicken Wings", "images/food/Food - Buffalo Wings.jpg", "Bobby's Buffalo Shack",
        "Spicey Chicken Wings", "Chicken", 7.99, 3.8),
    new FoodItem(13, "Edamame", "images/food/Food - Edamame.jpg", "Ume Japanese",
        "Edamame Soybeans", "Soybeans", 3.59, 3.6),
    new FoodItem(14, "Salmon Sushi", "images/food/Food - Sushi2.jpg", "Ume Japanese",
        "Sushi Wrapped in Salmon", "Rice, Salmon", 11.99, 3.6),
    new FoodItem(15, "Kale Sushi", "images/food/Food - Sushi3.jpg", "Ume Japanese",
        "Kale Sushi", "Kale, Rice", 12.99, 3.5),
    new FoodItem(16, "Brussels Sprouts", "images/food/Food - Brussel Sprouts.jpg", "Stellas",
        "Charred brussel sprouts with a garlic spicy-sweet asian glaze", "Brussel Sprouts, garlic, secret sauce (GF, Vegan)", 10.95, 5),
    new FoodItem(17, "Vietnamese Rice Noodles", "images/food/Food - Rice Noodles.jpg", "Pho Kim Tuong",
        "Noodles spiced so well it will bring you to a new season", "Spicy Rice Noodles, Pork, Avacado", 13.15, 5),
    new FoodItem(18, "Seafood Sushi", "images/food/Food - Sushi.jpg", "Ume Japanese",
        "A finely pieced seafood sushi dish", "Seasoned Rice, Smoked Salmon, Noodles, Sweet and Sour Sauce", 10.35, 5),
   

    // -----------------------------------------------------------
    // This is excess / Situational foods (Drinks, excess stuff)
    new FoodItem(19, "Bottled Water", "images/food/water.jpg", null, // Will not have a restaurant name in a food package
        "Natural spring water", "Spring Water, Ozone", 2.25, 5),
    new FoodItem(20, "Mango Kombucha", "images/food/kombucha.jpg", null, // Will not have a restaurant name in a food package
        "Fermented green tea", "Brewed Tea, Mango, Cane Sugar, Ginger Juice, Live Kombucha Culture (Yeast, Bacterial Culture)", 4.50, 4.5),
    new FoodItem(21, "Protein Powder", "images/food/proteinShake.jpg", "Bobby's Buffalo Shack",
        "Vanilla Protein to give you the boost you need throughout the day", "Natural Flavour, Guar Gum, Stevia Leaf Extract, Soy Lecithin", 36.99, 5),
    // ------------------------------------------------------------

    new FoodItem(22, "Quiche", "images/food/Food - Quiche.jpg", "Fion",
        "An egg custard based pie with a soft crust", "Egg, Cheese, Strawberry Jam", 8.99, 4.5),
    new FoodItem(23, "Fried Rice", "images/food/Food - friedrice.jpg", "Gong Cha",
        "Fried rice with vegtables and shrimp", "Friend Rice, Shrimp, Green Peas", 10.05, 4.1),
    new FoodItem(24, "Falafel Burrito", "images/food/falafelBurrito.jpg", "Fion",
        "Perfectly wrapped falafel snug for delight", "Falafel, Whole Wheat Wrap, Spinach, Beats, Hummus", 13.05, 4),
    new FoodItem(25, "Chicken Breast", "images/food/chickenBreast.jpg", "Fion",
        "Finely pieced chicken breast with bread crumbs", "Deep Friend Chicken Breast, Bread Crumbs, Olive Oil", 11.45, 3.2),
    new FoodItem(26, "Ribs", "images/food/ribs.jpg", "Smittys",
        "Fresh ribs in BBQ squace", "Ribs, BBQ Sauce", 13.99, 4.5),
    new FoodItem(27, "Glazed Donuts", "images/food/GlazedDonuts.jpg", "Smittys",
        "Freshly made donuts with a glaze", "Egg, Icing, Wheat", 6.99, 4.1),
    new FoodItem(28, "Fined Bagel", "images/food/kosherBagel.jpg", "Smittys",
        "Traditional seeded bagel with creem cheese filling", "Wheat, Cream Cheese, Scallion", 5.99, 4.5),
    new FoodItem(29, "Latkes", "images/food/Latkes.png", "Fion",
        "Fried thinned potatoe wedges with a creamy rich sauce", "Potatoes, Olive Oil, Fion's Special Sauce", 7.99, 4.9),
    new FoodItem(30, "Fresh Pasta", "images/food/pasta.jpg", "Fion",
        "Fresh pasta, seasons and sauced", "Pasta, Garnish, Tomato Sauce, Chili Pepper", 13.99, 4.4),

    // This is a special / Drink food
    // ------------------------------
    new FoodItem(31, "Erk Soos", "images/food/erkSoos.jpg", "Fion",
        "Extracted licorice root for a pure non-alcoholic beverage", "Licorice Root, Sugar Cane, Natural Spring Water", 4.99, 4.8),
    // ------------------------------

    new FoodItem(32, "Oysters", "images/food/oysters.jpg", "Ume Japanese",
        "Smoked Oysters with a lime finish", "Oysters, Lime", 8.99, 5),
    new FoodItem(33, "Classic Burger", "images/food/Food - Burger.jpg", "Stellas",
        "A burger for your everday needs", "Beef, Lettuce, Cheese, Tomatoes, Wheat Buns", 10.99, 4.4),
    new FoodItem(34, "Greek Salad", "images/food/Food - Greek Salad.jpg", "Stellas",
        "Greek Salad when feeling pouched", "Tomato, Cheese, Croutons, Lettuce", 7.99, 4.2),
    new FoodItem(35, "Chow Mein", "images/food/Food - Japanese Dish.jpg", "Gong Cha",
        "Pasta with a mix of everything you need", "Rice Noodles, Pork, Green Onion, Bacon", 7.99, 4.7),
    new FoodItem(36, "Kobe Beef Steak", "images/food/Food - Kobe.jpg", "Stellas",
        "A tender rich beef", "Pure Canadian Beef", 9.99, 4.8),
    new FoodItem(37, "Rice Noodles", "images/food/Food - Noodles.jpg", "Jolibee",
        "Regular noodles with a hint of salt", "Rice Noodles, Lettuce, salt", 10.99, 3.8),
    new FoodItem(38, "Chicken Noodles", "images/food/Food - Noodles Chicken.jpg", "Jolibee",
        "Noodles seasonsed with chicken and a coating sauce", "Parsley, Noodles, Chicken, Soft Cream", 13.99, 4.7),
    new FoodItem(39, "Pad Thai", "images/food/Food - Pad Thai.jpg", "Jolibee",
        "A full course of Pad Thai", "Rice, Onion, Tomatoes, Noodles, Tofu", 12.99, 4.5),
    new FoodItem(40, "Porridge", "images/food/Food - Porridge.jpg", "Pho Kim Tuong",
        "Fancy fruit bowl mix", "Black Berry, Apple, Banana, Oats, Milk, Cherry", 6.99, 4.6),

    // This is a special / Drink food
    // ------------------------------
    new FoodItem(41, "Veggie Smoothie", "images/food/Food - Vegetable Smoothie.jpg", "Gong Cha",
        "Freshin the day with a cold one", "Yogurt, Sugar, Flaxseeds, Kiwi, Celery", 4.99, 3.9),
    // ------------------------------

    new FoodItem(42, "Salmon Dinner", "images/food/Food - Salmon Dinner.jpg", "Stellas", 
        "A Salmon Dinner with salad", "Salmon, Letuce, Lemon", 14.99, 4.6),
    new FoodItem(43, "Pancakes", "images/food/Food - Pancakes.jpg", "Stellas", 
        "Fluffly Pancakes", "Egg, Milk, Fruit", 12.99, 4.4),
    new FoodItem(44, "Chocolate Cake", "images/food/Food - Chocolate Cake.jpg", "Stellas", 
        "A slice of chocolate cake covered with fresh fruit", "Egg, Milk, Fruit", 9.99, 4.9),
    new FoodItem(45, "Avocado and Cucumber Sushi", "images/food/Food - Sushi4.jpg", "Ume Japanese", 
        "Sushi with Avocado and Cucumber", "Seaweed, Avocoda, Cucumber, Rice", 8.99, 4.3),
    new FoodItem(46, "Noodles and Shrimp", "images/food/Food - Noodles Shrimp.jpg", "Gong Cha", 
        "Noodles with Shrimp", "Noodles, Shrimp", 11.99, 3.9),
    new FoodItem(47, "Shirataki Noodles", "images/food/Food - Noodles Shirataki.jpg", "Pho Kim Tuong", 
        "Noodles ", "Shirataki Noodles, vegetables", 13.99, 3.9),
    new FoodItem(48, "Kimchi Rice", "images/food/Food - Kimchi Rice.jpg", "Pho Kim Tuong", 
        "A Kimchi Rice dish garnished with an egg ", "Rice, vegetables, egg", 14.99, 4.2),
    new FoodItem(49, "Canned Pop Drinks", "images/food/Food - Pop Drink.jpg", null, 
        "Coke, Sprite, Pepsie, Dr Pepper, Cream Soda, Orage Crush", "", 2.99, 4.8), 
    new FoodItem(50, "Fired Pork Dish", "images/food/Food - Fired Pork.jpg", "Pho Kim Tuong",
        "A fried pork dish", "Pork, Vegetables", 12.95, 4.7),
    new FoodItem(51, "Cookie (GF&VGN)", "images/food/cookies.jpg", "Smittys",
        "A special treat for the special occasion.", "Coconut Flour, Dairy Free Chocolate Chips, Peanut Butter", 2.95, 5)
        
    /*  HAVE NOT YET USED THE IMAGES OF SALMON OR PIZZA ! */
]

// List of all packages, and their information
var foodPackages = [
    new FoodPackage("Protein", "images/package/protein.jpg", new Menu(
        [
            foodItems[3], foodItems[7], foodItems[12], foodItems[25], foodItems[26], foodItems[42], foodItems[21] // Let 21 be last!!
        ]
    )),
    new FoodPackage("Vegan", "images/package/vegan.jpg", new Menu(
        [
            foodItems[24], foodItems[0], foodItems[4], foodItems[9], foodItems[13], foodItems[16], foodItems[20], foodItems[51]
        ]
    )),
    new FoodPackage("Gluten Free", "images/package/glutenFree.jpg", new Menu(
        [
            foodItems[0], foodItems[16], foodItems[1], foodItems[4], foodItems[6], foodItems[9], foodItems[15], foodItems[29], foodItems[51], foodItems[25], foodItems[45]
        ]
    )),
    new FoodPackage("Vegetarian", "images/package/vegetarian.jpg", new Menu(
        [
            foodItems[6], foodItems[16], foodItems[24], foodItems[30], foodItems[6], foodItems[13], foodItems[34], foodItems[1], foodItems[0], foodItems[19], foodItems[45]
        ]
    )),
    new FoodPackage("Low Calories", "images/package/weight_loss.jpg", new Menu(
        [
            foodItems[4], foodItems[1], foodItems[0], foodItems[6], foodItems[8], foodItems[16], foodItems[34], foodItems[13], foodItems[15], foodItems[19], foodItems[45], foodItems[46]
        ]
    )),
    new FoodPackage("Locally Made", "images/package/organic.jpg", new Menu(
        [
            foodItems[1], foodItems[5], foodItems[6], foodItems[22], foodItems[24], foodItems[28], foodItems[10], foodItems[43]
        ]
    )),
    /* Removed Organic for Deserts */
    new FoodPackage("Deserts", "images/package/deserts.jpg", new Menu(
        [
            foodItems[10], foodItems[22], foodItems[27], foodItems[29], foodItems[44], foodItems[51]
        ]
    )),
    new FoodPackage("Kosher", "images/package/cocher.jpg", new Menu(
        [
            foodItems[28], foodItems[29], foodItems[0], foodItems[5], foodItems[8], foodItems[45], foodItems[46]
        ]
    )),
    new FoodPackage("Halal", "images/package/halal.png", new Menu(
        [
            foodItems[13], foodItems[30], foodItems[0], foodItems[20], foodItems[46], foodItems[31] // Leave 31 last on list
        ]
    )),
    new FoodPackage("Keto", "images/package/keto.jpg", new Menu(
        [
            foodItems[32], foodItems[40], foodItems[45], foodItems[8], foodItems[46]
        ]
    ))
];

// List of all restaurants, and their information
var restaurants = [
    new Restaurant(0, "Roughage Eatery", "images/restaurants/Rouhage Eastery.png",
        new Menu(
            {
                Starters:
                [
                    foodItems[0],
                    foodItems[1],
                    foodItems[5],
                    foodItems[9]
                ],
                Mains:
                [
                    foodItems[2],
                    foodItems[7]
                ],
                Desert:
                [
                    foodItems[10]
                ],
                Drinks:
                [
                    foodItems[19], 
                    foodItems[49]
                ]
            }
        ),
        210),
    new Restaurant(1, "Bobby's Buffalo Shack", "images/restaurants/Restaurant - Bobby's Buffalo Shack.jpg",
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

                ],
                Special:
                [
                    foodItems[21]
                ],
                Drinks:
                [
                    foodItems[20],
                    foodItems[19],
                    foodItems[49]
                ]
            }
        ),
        175),
    new Restaurant(2, "Ume Japanese", "images/restaurants/Ume Japanese.png",
        new Menu(
            {
                Starters:
                [
                    foodItems[13],
                    foodItems[32]
                ],
                Sushi:
                [
                    foodItems[14],
                    foodItems[15],
                    foodItems[4],
                    foodItems[18],
                    foodItems[45]
                ],
                Drinks:
                [
                    foodItems[19], 
                    foodItems[49]
                ]
            }
        ), 105),
 
    new Restaurant(3, "Gong Cha", "images/restaurants/Gong Cha.jpg", 
        new Menu(
            {
                /* TODO: Lets make some more smoothies for this restaurant */
                Smoothies:
                [
                    foodItems[41]
                ],
                Mains:
                [
                    foodItems[23],
                    foodItems[11],
                    foodItems[35],
                    foodItems[46]
                ],
                Drinks:
                [
                    foodItems[19], 
                    foodItems[49]
                ]
            }
            ), 21),
    new Restaurant(4, "Jolibee", "images/restaurants/Jolibee.png",
        new Menu(
            {
                Starters:
                [
                    foodItems[32]
                ],
                Mains:
                [
                    foodItems[37],
                    foodItems[38],
                    foodItems[39]
                ],
                Drinks:
                [
                    foodItems[19], 
                    foodItems[49]
                ]
            }
        )
        , 80),
    new Restaurant(5, "Fion", "images/restaurants/Fion.jpg", 
        new Menu(
            {
                Mains:
                    [
                        foodItems[24],
                        foodItems[25],
                        foodItems[30]
                    ],
                Desert:
                    [
                        foodItems[22],
                        foodItems[29]
                    ],
                Drinks:
                    [
                        foodItems[31],
                        foodItems[20],
                        foodItems[19],
                        foodItems[49]
                    ]
            }
        )
        , 100),
    new Restaurant(6, "Smittys", "images/restaurants/Smitty.png", 
        new Menu(
            {
                Starters:
                    [
                        foodItems[6], //asparagus
                        foodItems[28]
                    ],
                Mains:
                    [
                        foodItems[26],
                        foodItems[29]
                    ],
                Desert:
                    [
                        foodItems[27],
                        foodItems[51]
                    ],
                    Drinks:
                    [
                        foodItems[19], 
                        foodItems[49]
                    ]
            }
        )
        , 50),
  
    new Restaurant(7, "Pho Kim Tuong", "images/restaurants/Pho Kim Tuong.jpg",
        new Menu(
            {
                Starters:
                    [
                        foodItems[40]
                    ],
                Mains:
                    [
                        foodItems[17],//viet rice noodles
                        foodItems[47],
                        foodItems[48],
                        foodItems[50]
                    ],
                    Drinks:
                    [
                        foodItems[19], 
                        foodItems[49]
                    ]
            }
        )
        , 33),
    new Restaurant(8, "Stellas", "images/restaurants/Stellas.jpg",
        new Menu(
            {
                Appetizers:
                [
                    foodItems[16],
                    foodItems[34]
                ],
                Breakfast:
                [
                    foodItems[43]
                ],
                Mains:
                [
                    foodItems[33],
                    foodItems[36],
                    foodItems[42]
                ], 
                Dessert:
                [
                    foodItems[44]
                ],
                Drinks:
                [
                    foodItems[19], 
                    foodItems[49]
                ]
            }
        )
        , 63)
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
    name = name.split('/')[0]; // Ignore instructions
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
