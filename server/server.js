import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDB.js';
import ImportData from './DataImport.js';
import productRoute from './routes/ProductRoute.js';

dotenv.config();
connectDatabase();
const app = express();

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("API is runninggg....");
})

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
    console.log(`listening in port ${PORT}`);
})