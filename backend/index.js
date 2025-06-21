import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
const app = express()
const PORT =process.env.PORT || 3000
const URI = process.env.MONGODBURI
import bookRoute from '../backend/route/book.route.js'
import cors from 'cors'
import wishlistRoute from './route/wishlist.route.js';
import userRoute from '../backend/route/user.route.js';



//connect to mongodb
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongodb")
    
} catch (error) {
    console.log("ERROR: ", error)
}

app.use(cors());
app.use(express.json())
//defining routes 
app.use("/book",bookRoute)
app.use('/wishlist', wishlistRoute);
app.use("/user", userRoute)

// app.use(cors());
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})
