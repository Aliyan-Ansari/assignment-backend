const express = require('express')
const router = express.Router()

const Order = require('../models/orderModal')

const {
    validateCreateorderPayload,
    validateGetOrderbody
} = require('../validation/order');

router.post('/', async (req, res) => {
    try {
        const validBody = validateCreateorderPayload(req.body);

        if (validBody.error) {
            return res.status(400).json({
                status: "failed",
                message: validBody.error.details[0].message,
            });
        }

        const newDoc = await Order.create(validBody.value);

        return res.status(201).json({
            status: 'success',
            data: {
                data: newDoc,
            },
        });


    } catch (error) {
        console.log("error", error)
        return res.status(404).json({
            status: false,
            error
        })
    }
})


router.get('/', async (req, res) => {
    try {


        const orders = await Order.find({});

        return res.status(201).json({
            status: 'success',
            data: {
                data: orders,
            },
        });


    } catch (error) {
        console.log("error", error)
        return res.status(404).json({
            status: false,
            error
        })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const order = await Order.find({ _id: req.params.id });

        return res.status(201).json({
            status: 'success',
            data: {
                data: order,
            },
        });


    } catch (error) {
        console.log("error", error)
        return res.status(404).json({
            status: false,
            error
        })
    }
})




module.exports = router