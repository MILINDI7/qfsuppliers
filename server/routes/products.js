const router = require('express').Router();
const Product = require('../models/Product');
const multer = require('multer');
const streamifier = require('streamifier');
const { v2: cloudinary } = require('cloudinary');
const jwt = require('jsonwebtoken');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const upload = multer(); // memory storage

const auth = (req,res,next) => {
  const header = req.headers.authorization;
  if(!header) return res.status(401).json({ msg: 'No token' });
  const token = header.split(' ')[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (e) {
    return res.status(401).json({ msg: 'Invalid token' });
  }
};

// Public: list with optional category & search q
router.get('/', async (req,res)=>{
  try {
    const { category, q } = req.query;
    const filter = {};
    if(category) filter.category = category;
    if(q) filter.name = { $regex: q, $options: 'i' };
    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req,res)=>{
  try {
    const p = await Product.findById(req.params.id);
    res.json(p);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create
router.post('/', auth, upload.single('image'), async (req,res)=>{
  try {
    let image_url = '';
    if(req.file){
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ folder: 'qfsuppliers' }, (err, res) => {
          if(err) reject(err); else resolve(res);
        });
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
      image_url = result.secure_url;
    }
    const { name, category, price, description } = req.body;
    const product = new Product({ name, category, price, description, image_url });
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update
router.put('/:id', auth, upload.single('image'), async (req,res)=>{
  try {
    const updates = { ...req.body };
    if(req.file){
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ folder: 'qfsuppliers' }, (err, res) => {
          if(err) reject(err); else resolve(res);
        });
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
      updates.image_url = result.secure_url;
    }
    const product = await Product.findByIdAndUpdate(req.params.id, updates, { new: true });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete
router.delete('/:id', auth, async (req,res)=>{
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
