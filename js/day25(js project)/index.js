// Restaurant Info
// 1: Img
// 2: Name 
// 3: Rating 
// 4: food_type 
// 5: price_for_two
// 6: Location 
// 7: Distance
// 8: Offers 
// 9: Alcohol
// 10: Restaurant
// 11: Restaurant_opening_time
// 12: Restaurant_closing_time
const restaurant = []

const restaurantNames = [
    "Pasta Palace", "Burger Barn", "Taco Tower", "Sushi Station", "Pizza Plaza",
    "Steakhouse Supreme", "Vegan Valley", "BBQ Bistro", "Fish Fry", "Noodle Nook",
    "Curry Corner", "Sandwich Shop", "Salad Spot", "Grill Garden", "Dessert Den",
    "Brunch Boutique", "Deli Delight", "Tapas Tavern", "Diner Depot", "Buffet Bay"
];

const food_type = [
    "Italian", "Mexican", "Japanese", "Indian", "Chinese", "American", "Korean", "Thai", "Vietnamese", "Middle Eastern"
];

const location = [
    "New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"
];

let arr = ["first" , "second" , "third" , "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"]

for (let i = 0; i < 100; i++) {
    let obj = {}
    obj["image"] = arr[Math.floor(Math.random() * 10)]
    obj["restaurant"] = restaurantNames[Math.floor(Math.random() * 20)]
    obj["rating"] = Math.floor(Math.random() * 5) + 1
    obj["food_type"] = food_type[Math.floor(Math.random() * 10)]
    obj["price_for_two"] = Math.floor(Math.random() * 2401) + 100
    obj["location"] = location[Math.floor(Math.random() * 10)]
    obj["distance"] = Math.floor(Math.random() * 10).toFixed(1) + 1
    obj["offers"] = Math.floor(Math.random() * 101) + 1
    obj["alcohol"] = Math.random() > 0.7
    obj["restaurant_opening_time"] = Math.floor(Math.random() * 24)
    obj["restaurant_closing_time"] = (obj["restaurant_opening_time"] + 12) % 24
    restaurant.push(obj)
}
const fs = require('fs');
const restaurantJSON = JSON.stringify(restaurant, null, 2);
fs.writeFileSync('app.json', restaurantJSON);

