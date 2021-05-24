import initDB from '../../helpers/initDB'
import User from '../../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

initDB()



export default async (req,res)=>
{
    const {name,email,password}=req.body
    try{
            if(!email || !password)
            {
             return res.status(422).json({error:"Please all the field"})
            }
        const user =  await User.findOne({email})
        if(!user)
        {
            return res.status(404).json({error:"User or Email not found"})
        }
        const doMatch = await bcrypt.compare(password,user.password)
        if(doMatch)
        {
            const token = jwt.sign({userid:user._id},process.env.JWT_SECRET,{
                expiresIn:"7d"
            })
            res.status(201).json({token})
        }
        else
        {
          return res.status(401).json({error:"Username or Password don't match"})
        }
        res.status(201).json({message:"Signup Successfully"})
    }
    catch(err)
    {
        console.log(err)
    }
}