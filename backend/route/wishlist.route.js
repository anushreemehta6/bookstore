// route/wishlist.route.js
import express from 'express';
import Wishlist from '../model/wishlist.model.js';

const router = express.Router();

// POST - add to wishlist
router.post('/', async (req, res) => {
  try {
    const newItem = new Wishlist(req.body);
    await newItem.save();
    res.status(201).json({ message: 'Added to wishlist!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add to wishlist', error: err });
  }
});

// GET - get wishlist
router.get('/', async (req, res) => {
  try {
    const wishlist = await Wishlist.find();
    res.status(200).json(wishlist);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch wishlist', error: err });
  }
});

export default router;
