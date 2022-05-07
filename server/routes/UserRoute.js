import asyncHandler from 'express-async-handler';
import express from 'express';
import User from './../models/UserModel.js';
import generateToken from './../utils/generateTokens.js';

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
                isAdmin: user.Admin,
                jwtToken: generateToken(user._id),
                createdAt: user.createdAt,
            });
        } else {
            res.status(401);
            throw new Error("Invalid Email or Password");
        }
    }
));

export default userRoute;