import User from "../model/user.model";

import bcryptjs   from 'bcryptjs';
import { errorHandler } from "../utils/error";

export const signup = async(req,res , next)=>{
    const {username , email , password } = req.body ;


    if(!username || !email || !password || username === '' || email === '' || password === ''){

       next(errorHandler(400,'all feild require')) ;
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
      next(error) ;
    }



    
} ;