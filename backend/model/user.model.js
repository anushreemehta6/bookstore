import mongoose from "mongoose";

//defining the schema 

const Userschema = mongoose.Schema({
  fullname:{ type:  String , require: true},
  email: { type:  String , require: true, unique: true },
  password:{ type:  String , require: true},
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'book' }],
})

//converting to model 

const User = mongoose.model("user",Userschema)
export default User 