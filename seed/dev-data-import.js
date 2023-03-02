const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const Order = require('../models/orderModal');

// Setting Env Files
dotenv.config();

// Connecting Mongoose
const DB = process.env.MONGO_URL;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connection successfull');
  });

//   Read JSON file
const orders = JSON.parse(fs.readFileSync(`${__dirname}/orders.json`, 'utf-8'));



// Import Data Into DB
const importData = async () => {
  try {
    await Order.create(orders);
    console.log('Data successfully Loaded');
    process.exit()
  } catch (err) {
    console.log('create error', err);
  }
};

// Delete all data from collection
const deleteData = async () => {
  try {
    await Order.deleteMany()

    console.log('Data successfully Deleted');
    process.exit()
  } catch (err) {
    console.log('delete error', err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}