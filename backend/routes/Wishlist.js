const Wishlist = require('../models/Wishlist')
const { verifyToken } = require('../middleware/verifyToken')
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



module.exports = router
