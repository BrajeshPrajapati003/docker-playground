import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    return res.send("Hello Docker!");
});
 
app.get("/products", (req, res) => {
    return res.json([
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200, },
        { id: 3, name: "Product 3", price: 300 }
    ])
})

app.listen(PORT, "0.0.0.0", ()=> {
    console.log(`server is running on port ${PORT}`);
})


app.listen(3000, () => {
    console.log(`Server is listening on port ${3000}`)
})
