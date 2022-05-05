import asyncHandler from 'express-async-handler';
import express from 'express';
import Product from '../models/ProductModel.js';

const productRoute = express.Router();

productRoute.get("/", asyncHandler(
    async (req, res) => {
        const products = await Product.find({});
        res.json(products);
    }
));

productRoute.get("/:id", asyncHandler(
    async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            throw new Error("Product Not Found");
            res.status(404);
        }

    }
));

export default productRoute;