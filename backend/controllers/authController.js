import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModal from '../models/userModel.js';



export const register = async(req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.json({success: false, message: 'Missing Details'})
    }

    try{
        const existingUser = await userModal.findOne({email});
        if(existingUser) {
            return res.json({success: false, message: 'User already exists'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new userModal({name, email, password: hashedPassword});
        await user.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1000d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 1000 * 24 * 60 * 60 * 1000 // 7 days
        });

    }
    catch(error){
        res.json({success: false, message: error.message});
    }
}

export const login = async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.json({success: false, message: 'Missing Details'});
    }
    try{
        const user = await userModal.findOne({email});
        if(!user) {
            return res.json({success: false, message: 'User not found'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success: false, message: 'Invalid credentials'});
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1000d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 1000 * 24 * 60 * 60 * 1000 // 7 days
        });

        return res.json({success: true, message: 'Login Successful'});

    } catch(error) {
        res.json({success: false, message: error.message});
    }
}


export const logout = async(req,res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
        });
        return res.json({success: true, message: 'Logout Successful'});
    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}