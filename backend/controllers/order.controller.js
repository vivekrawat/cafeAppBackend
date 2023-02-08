const Order = require('../models/Order')
exports.addingOrder = async(req,res)=> {
    const newOrder = new Order(req.body)
    try {
        await newOrder.save()
        res.status(200).json({message: 'order has been successfully placed'})
    } catch(err) {
        res.status(500).json(err)
    }
}

exports.userOrders = async(req,res)=> {
    try {
        const orders = await Order.find({userId: req.params.id}).populate('items items.itemId')
        res.status(200).json(orders)
    } catch(err) {
        res.status(500).json(err)
    }
}