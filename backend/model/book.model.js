import mongoose from "mongoose";
//define the scehma
const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    desc:String ,
    category:String,
    img:String
})

//convberting upper schema to model 

const Book = mongoose.model("book",bookSchema)
export default Book