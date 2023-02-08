
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signUp = async(req,res)=>{
    if(req.body.password) {
    req.body.password = bcrypt.hashSync(
        req.body.password,
        8
    ).toString()
    }
    const newUser = new User(req.body)
    try {
        await newUser.save()
        const msg = {message: 'successful'}
        res.status(200).json(msg)
    } catch(err) {
        res.status(500).json(err)
    }
}

exports.login = async(req,res)=> {
    try {
        const user = await User.findOne({mobileNo: req.body.mobileNo})
        if(!user) {
            res.status(404).json({message: 'user is not found'})
        }
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        )
        const token = jwt.sign({id: user._id}, process.env.JWT_SEC)
        if(!passwordIsValid) {
            res.status(401).json({message: 'password entered is incorrect'})
        } else {
            const data = {
                mobileNo: user.mobileNo,
                isAdmin: user.isAdmin,
                token: token
            }
            res.status(200).json(data)
        }
    } catch(err) {
        res.status(500).json(err)
    }
}
