/* eslint-disable prefer-arrow-callback */
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: [true, 'Order must contain a customer name!'],
        },
        amount: {
            type: Number,
            min: 1,
            required: [true, 'Order should contain an!'],
        },
        orderNumber: {
            type: String,
            required: [true, 'Order must contain a customer ID!'],
            unique: true
        },
        description: {
            type: String,
            required: [true, 'Order must contain a descriptin.'],
        }
    }
);


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;