import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import { UserModel } from "../models/user_model.js";
import { userValidator } from "../validators/user_validator.js";

export const signup = async (req, res) => {
    try {
        // Validate the user request
        const {error, value} = userValidator.validate(req.body)
        if (error) {
            return res.status(400).json(error.details[0].message)
        }

        // Check if user already exists
        const findIfUserExists = await UserModel.findOne(value.email);
        if (findIfUserExists) {
            return res.status(400).json('User already exists')
        }
    
        // Hash the password
        const password = value.password;
        const hashedPassword = await bcrypt.hash(password, 10)
    
        const user = await UserModel.create({
            ...value,
            password: hashedPassword
        })
    
        return res.status(201).json('User registered successfully')
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const login = async (req, res) => {
    try {
        const {email, username, password} = req.body;
    
        // Check if user exists
        const user = await UserModel.findOne({
            $or: [
                {email},
                {username}
            ]
        })
    
        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            })
        }
    
        // Check for valid credentials
        const correctPassword = bcrypt.compareSync(password, user.password)
        if (!correctPassword) {
            return res.status(401).json({
                message: 'Invalid credentials'
            })
        } else {
            // Generate token
            const token = jwt.sign(
                {id: user.id},
                process.env.JWT_PRIVATE_KEY,
                {expiresIn: '3h'}
            );
    
            // Return response
            return res.status(201).json({
                message: 'User logged in',
                accessToken: token,
                user: {
                    name: user.name,
                    username: user.username
                }
            })
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

// Endpoint to get a user by username
export const getUser = async (req, res) => {

    try {
        const username = req.params.username.toLowerCase();
        const user = await UserModel.findOne({username})
    
        if (!user) {
            return res.status(400).json({
                message: 'No user found'
            })
        }
    
        return res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }

}