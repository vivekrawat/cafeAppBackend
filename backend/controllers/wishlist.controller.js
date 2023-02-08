const Wishlist = require('../models/Wishlist')

exports.getWishlist = async(req,res) => {
    try {
        const wishlist = await Wishlist.findById(req.params.id).populate('items items.itemId')
        res.status(200).json(wishlist)
    } catch(err) {
        res.status(500).json(err)
    }
}
exports.editWishlist = async(req,res)=> {
    try {
        await Wishlist.updateOne({_id:req.params.id}, req.body,{ runValidators: true })
        res.status(200).json({message: 'wishlist has been updated successfully'})
    } catch(err) {
        res.status(500).json(err)
    }
}