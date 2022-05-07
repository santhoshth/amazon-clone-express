import asyncHandler from 'express-async-handler';
import express from 'express';
import User from './../models/UserModel.js';
import generateToken from './../utils/generateTokens.js';
import protect from '../middleware/AuthMiddleware.js';

const userRoute = express.Router();

// LOGIN
userRoute.post("/login", asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                jwtToken: generateToken(user._id),
                createdAt: user.createdAt,
            });
        } else {
            res.status(401);
            throw new Error("Invalid Email or Password");
        }
    }
));

// USER PROFILE
userRoute.get("/profile", protect, asyncHandler(
    async (req, res) => {
        const user = await User.findById(req.user._id);
        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
            })
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    }
));

export default userRoute;