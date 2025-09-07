const express = require("express");
const { Auth } = require("./middleware");
const app = express();

app.use(express.json());

// app.use('/admin' , Auth)

const foodItems = [
  { id: 1, food: "Burger", category: "Fast Food", price: 100 },
  { id: 2, food: "Pizza", category: "Fast Food", price: 150 },
  { id: 3, food: "Tacos", category: "Mexican", price: 120 },
  { id: 4, food: "Sushi", category: "Japanese", price: 180 },
  { id: 5, food: "Salad", category: "Healthy", price: 80 },
  { id: 6, food: "Ramen", category: "Japanese", price: 160 },
  { id: 7, food: "Curry", category: "Indian", price: 140 },
  { id: 8, food: "Fish Fry", category: "SeaFood", price: 200 },
  { id: 9, food: "Sandwich", category: "Fast Food", price: 130 },
  { id: 10, food: "Fries", category: "Fast Food", price: 90 },
  { id: 11, food: "Pasta", category: "Italian", price: 170 },
  { id: 12, food: "Burrito", category: "Mexican", price: 110 },
  { id: 13, food: "Steak", category: "American", price: 250 },
  { id: 14, food: "Paella", category: "Spanish", price: 220 },
  { id: 15, food: "Pho", category: "Vietnamese", price: 140 },
  { id: 16, food: "Lobster", category: "SeaFood", price: 300 },
  { id: 17, food: "Dumplings", category: "Chinese", price: 100 },
  { id: 18, food: "Falafel", category: "Middle Eastern", price: 90 },
  { id: 19, food: "Pancakes", category: "Breakfast", price: 50 },
  { id: 20, food: "Gelato", category: "Dessert", price: 60 },
];

// user ka jo bhi food add hoga wo idhar jaayega
let foodMenu = [];
app.get("/food", (req, res) => {
  res.send(foodItems);
});

app.post("/admin", Auth, (req, res) => {
  // add item into food menu
  // authentication karna padega ki kya ye admin hi hai
  // dummy code
  // const token = 'ABCDEF'
  // const Access = token === 'ABCDEF' ? 1 : 0;

  // if (Access){
  //     foodItems.push(req.body)
  //     res.send('Item added successfully')
  // }else{
  //     res.send("Items can't be added")
  // }

  foodItems.push(req.body);
  res.send("Item added successfully");
});

app.patch("/admin/:id", Auth, (req, res) => {
  // const token = 'ABCDEF'
  // const Access = token === 'ABCDEF' ? 1 : 0;

  // if (Access){

  //     id = req.params.id;
  //     data = foodItems.find(item => item.id==id)
  //     if (req.body.food)
  //         data.food = req.body.food

  //     if (req.body.category)
  //         data.category = req.body.category

  //     if (req.body.price)
  //         data.price = req.body.price

  //     res.send('update succefull')

  // }else{
  //     res.status(401).send('not permission')
  // }

  id = req.params.id;
  data = foodItems.find((item) => item.id == id);
  if (req.body.food) data.food = req.body.food;

  if (req.body.category) data.category = req.body.category;

  if (req.body.price) data.price = req.body.price;

  res.send("update successfully");
});

app.delete("/admin/:id", Auth, (req, res) => {
  // const token = 'ABCDEF'
  // const Access = token === 'ABCDEF' ? 1 : 0;

  id = req.params.id;
  // data = foodItems.find(item => item.id==id)
  let index = foodItems.findIndex((item) => item.id == id);

  if (index == -1) res.send("not found");
  else {
    foodItems.splice(index, 1);
    res.send("deleted successfully");
  }



  // if (Access){
  //     foodItems.splice(index,1);
  //     res.send('deleted successfully')
  // }else{
  //     res.status(401).send('not permission')
  // }
});

app.get("/user", (req, res) => {
  // res.send(foodMenu);

    if (foodMenu.length==0){
        res.send("Menu is empty")
    }else{
        res.send(foodMenu)
    }
})


app.post('/user/:id' , (req , res) => {
    const id = parseInt(req.params.id);
    const data = foodItems.find(item => item.id==id)
    
    
    if (data){
        foodMenu.push(data)
        res.send('Item added successfully')
    }else{
        res.send("Items can't be added")
    }
})

app.delete('/user/:id' , (req , res) => {
    const id = req.params.id;
    const data = foodItems.find(item => item.id==id)

    let index = foodMenu.findIndex((item) => item.id == id);
    
    if (index != -1){
        foodMenu.splice(index , 1)
        res.send('Item deleted successfully')
    }else{
        res.send("Items can't be deleted")
    }
})


app.get('/dummy' , (req , res) => {
    
    JSON.parse("[1,2,3]")
    res.send("Success")
})

app.listen(4000, () => {
  console.log("listen at 4000");
});
