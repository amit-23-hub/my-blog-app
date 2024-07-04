import User from "../model/user.model";

import bcryptjs   from 'bcryptjs';

export const signup = async(req,res)=>{
    const {username , email , password } = req.body ;


    if(!username || !email || !password || username === '' || email === '' || password === ''){

        return res.status(400).json({massage:'all feild are require '} ) ;
    }


    const hashedpassword = bcryptjs.hashSync (password ,10) ;

    const newUser = new User({
        username,
        email,
        password :hashedpassword,
    }); 

    try {
        await newUser.save();
    res.json({message : "sign up  successfully"}) ; 
        
    } catch (error) {
        res.status(500).json({message:error.massage});
    }



    
} ;