const Item = require('../models/Item')
const { verifyToken, verifyTokenAndAdmin} = require('../middleware/verifyToken')
const paginatedResults  = require('../middleware/pagination')

const router = require('express').Router()
/*
    adding an item
*/
router.post("/", verifyTokenAndAdmin, async(req,res)=> {
    const newItem = new Item(req.body)
    try {
        await newItem.save()
        const payload = { msg: 'Item added Successfully' }
        res.status(200).json(payload)
    } catch (err) {
        if(err.code === 11000) {
            res.status(500).json({message: 'duplicate title'})
        } else {
            res.status(500).json(err)
        }
    }
})

/*
    deleting an item
*/
router.delete("/:id", verifyTokenAndAdmin, async(req,res)=> {
    try{
        await Item.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'item as been deleted successfully'})
    } catch(err) {
        res.status(500).json(err)
    }
})

/*
    get all items
*/
router.get('/', paginatedResults(Item), (req,res) => {
    res.json(res.paginatedResults)
    /*
    try {
        const products = await Item.find()
        res.status(200).json(products)
    } catch(err) {
        res.status(500).json(err)
    } */
})

/*
    editing an item
*/
router.put('/:id', verifyTokenAndAdmin, async(req,res) => {
    try{
        await Item.updateOne({_id: req.params.id}, req.body,{ runValidators: true })
        res.status(200).json({message: 'item as been updated successfully'})
    } catch(err) {
        res.status(500).json(err)
    }

})



module.exports = router