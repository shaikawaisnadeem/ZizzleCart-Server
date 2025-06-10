import express from 'express'
import Run from '../Config/db.js'
import Signup from '../Controller-Signup/SignSchema.js'
const router = express.Router()

router.post('/newuser',async(req,res)=>{
    const {name, email, password} = req.body
    try{
        const newUser = await Signup.create({
            name,
            email,
            password
        })
        res.json({
            message: 'User created successfully',
        })
    }
    catch(err){
        res.json({
            message: 'Error creating user',
        })
    }
})
export default router;

