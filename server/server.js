import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDB.js';
import ImportData from './DataImport.js';

dotenv.config();
connectDatabase();
const app = express();

// API
app.use("/api/import", ImportData);

// app.get('/api/products', (req, res) => {
//     res.json(products);
// })

// app.get('/api/products/:id', (req, res) => {
//     const productId = parseInt(req.params.id);
//     const product = products.find(p => p.id === productId);
//     res.json(product);
// })

app.get('/', (req, res) => {
    res.send("API is running....");
})

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
    console.log(`listening in port ${PORT}`);
})