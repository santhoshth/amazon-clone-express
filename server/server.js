import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDB.js';
import ImportData from './DataImport.js';
import productRoute from './routes/ProductRoute.js';
import { errorHandler, notFound } from './middleware/Errors.js';
import userRoute from './routes/UserRoute.js';
import orderRoute from './routes/OrderRoute.js';
import paymentRoute from './routes/PaymentRoute.js';

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/payments", paymentRoute);

// ERROR HANDLERS
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
    console.log(`listening in port ${PORT}`);
})