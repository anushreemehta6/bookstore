// models/wishlist.model.js
import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
  name: String,
  img: String,
  price: Number,
  category: String,
  desc: String
});

export default mongoose.model("Wishlist", wishlistSchema);
