import express from 'express';
import Run from '../Config/db.js';
import Login from '../Controller-Login/LoginSchema.js';
import Signup from '../Controller-Signup/SignSchema.js';

const router = express.Router();

router.post('/login',async(req,res)=>{
    const {email, password} = req.body;
    try {
        const loggedUser = await Signup.findOne({
            email,
            password
        })
        if (loggedUser){
            res.json({
                message: 'Login successful',
            })
        }
        else {
            res.json({
                message: 'Invalid email or password',
            })
        }
    }
    catch(err){
        res.json({
            message: 'Error logging in',
        })
    }
})
export default router;