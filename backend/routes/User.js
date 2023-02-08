const { verifyToken } = require('../middleware/verifyToken')
const router = require('express').Router()

const { signUp, logIn } = require('../controllers/user.controller')
const { addingOrder, userOrders } = require('../controllers/order.controller.js')
const { getWishlist, editWishlist } = require('../controllers/wishlist.controller.js') 
/*
    user sign up
*/
router.post("/signup", signUp)
/*
    user login
*/
router.post("/login", logIn)

/*
    adding a order
*/
router.post("/",verifyToken, addingOrder)

/*
    Orders by a user
*/
router.get("/:id",verifyToken, userOrders)
/*
    get a wislist by user
*/

router.get('/find/:id',verifyToken, getWishlist)

/*
    editing a wislist
*/
router.put('/:id',verifyToken, editWishlist)


module.exports  = router


