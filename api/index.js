import express from "express";
import mongoose from "mongoose";

 import dotenv from "dotenv" ;
 dotenv.config();

 import userRoutes from './routes/user.routes.js'
 import userAuth from './routes/auth.route.js'

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});


app.use('/api/user' , userRoutes)
app.use('/api/auth' , userAuth)

// middleware for handling error 
app.use((err,req,res,next)=>{
     const statusCode = err.statusCode || 500 ;
     const message = err.message || 'Something went wrong';

     res.status(statusCode).json({
      success :false ,
      statusCode,
      message
     }) ;
})