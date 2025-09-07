
const express = require("express");

const app = express();

app.use(express.json());


const BookStore = [
    { id: 1, name: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling" },
    { id: 2, name: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, name: "The Catcher in the Rye", author: "J.D. Salinger" },
    { id: 4, name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 5, name: "1984", author: "George Orwell" },
];


app.get("/books", (req, res) => {
    console.log(req.query);
    res.send(BookStore);
});

app.get("/books/:id", (req, res) => {
    const id = req.params.id;
    const book = BookStore.find((book) => book.id == id);
    res.send(book);
});


app.post("/books", (req, res) => {
    const book = req.body;
    console.log(book);
    BookStore.push(book);
    res.send("Book added successfully");
})

app.delete("/books/:id", (req, res) => {
    const id = req.params.id;
    BookStore = BookStore.filter((book) => book.id != id);
    res.send("Book deleted successfully");
})

app.get("/books/:name" , (req, res) => {
    const name = req.params.name;
    const book = BookStore.find((book) => book.name == name);
    res.send(book);
})
app.listen(4000, () => {
    console.log("server is running at 4000");
});