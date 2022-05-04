import express from 'express';
import products from './data/Products.js';

const app = express();
const PORT = 5000;

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

app.listen(PORT, () => {
    console.log(`listening in port ${PORT}`);
})