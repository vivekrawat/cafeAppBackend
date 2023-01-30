const Order = require('../models/Order')
const { verifyToken, verifyTokenAndAdmin} = require('../middleware/verifyToken')
const router = require('express').Router()

/*
    adding a order
*/
router.post("/",verifyToken, async(req,res)=> {
    const newOrder = new Order(req.body)
    try {
        await newOrder.save()
        res.status(200).json({message: 'order has been successfully placed'})
    } catch(err) {
        res.status(500).json(err)
    }
})

/*
    Orders by a user
*/
router.get("/:id",verifyToken, async(req,res)=> {
    try {
        const orders = await Order.find({userId: req.params.id}).populate('items items.itemId')
        res.status(200).json(orders)
    } catch(err) {
        res.status(500).json(err)
    }
})

/*
    get all orders
*/
router.get("/",verifyTokenAndAdmin, async(req,res)=> {
    try {
        const orders = await  Order.find().populate('items items.itemId')
        res.status(200).json(orders)
    } catch(err) {
        res.status(500).json(err)
    }
})



/*
    changing the status from pending to history
*/
router.put("/complete/:id",verifyToken, async(req,res)=> {
    try {
        await Order.findByIdAndUpdate(req.params.id,{ status : 'completed'})
        res.status(200).json({message: 'order has been completed successfully'})
    } catch(err) {
        res.send(500).json(err)
    }
})

module.exports = router
