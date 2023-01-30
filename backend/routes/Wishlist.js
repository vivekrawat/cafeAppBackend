const Wishlist = require('../models/Wishlist')
const { verifyToken, verifyTokenAndAdmin} = require('../middleware/verifyToken')
const router = require('express').Router()
/*
    adding a wislist
*/
router.post('/',verifyToken,async(req,res) => {
    const newWishlist = new Wishlist(req.body)
    try {
        await newWishlist.save()
        res.status(200).json({message: 'Wishlist Created'})
    } catch(err) {
        res.status(500).json(err)
    }
})
/*
    get a wislist by user
*/

router.get('/find/:id',verifyToken, async(req,res)=> {
    try {
        const wishlist = await Wishlist.findById(req.params.id).populate('items items.itemId')
        res.status(200).json(wishlist)
    } catch(err) {
        res.status(500).json(err)
    }
})

/*
    get all wishlists
*/
router.get('/',verifyTokenAndAdmin, async(req,res) => {
    try {
        const wishlists = await Wishlist.find()
        res.status(200).json(wishlists)
    } catch(err) {
        res.status(500).json(err)
    }
})

/*
    deleting a wishlist
*/
router.delete('/:id',verifyTokenAndAdmin, async(req,res)=> {
    try {
        await Wishlist.deleteOne({_id: req.params.id})
        res.status(200).json({message: 'wishlist has been deleted successfully'})
    } catch(err) {
        res.status(500).json(err)
    }
})

/*
    editing a wislist
*/
router.put('/:id',verifyToken, async(req,res)=> {
    try {
        await Wishlist.updateOne({_id:req.params.id}, req.body,{ runValidators: true })
        res.status(200).json({message: 'wishlist has been updated successfully'})
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router
