import express from 'express';
import products from './data/Products.js';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDB.js';

dotenv.config();
connectDatabase();
const app = express();


app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get('/api/products/:category', (req, res) => {
    const data = products[req.params.category];
    res.json(data);
});

app.get('/api/products/:category/:id', (req, res) => {
    const data = products[req.params.category];
    const productId = parseInt(req.params.id);
    const product = data.find((p) => p.id === productId);
    res.json(product);
})

app.get('/', (req, res) => {
    res.send("API is running....");
})

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
    console.log(`listening in port ${PORT}`);
})