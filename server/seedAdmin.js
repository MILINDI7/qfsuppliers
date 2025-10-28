require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

async function seed(){
  await mongoose.connect(process.env.MONGO_URI);
  const pw = await bcrypt.hash('ChangeMe123!', 12);
  const exists = await User.findOne({ username: 'admin' });
  if(exists) {
    console.log('admin user already exists');
    process.exit(0);
  }
  await User.create({ username: 'admin', password: pw });
  console.log('admin created with username: admin and password: ChangeMe123!');
  process.exit(0);
}
seed().catch(err => { console.error(err); process.exit(1); });
