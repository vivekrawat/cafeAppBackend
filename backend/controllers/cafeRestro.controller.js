
const CafeRestroAuth = require('../models/CafeRestroAuth')
const CafeRestro  = require('../models/CafeRestro')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signUp = async(req,res) => {
    if (req.body.password) {
    req.body.password = bcrypt.hashSync(
        req.body.password,
        8
    ).toString()
    }
    const newCafe = new CafeRestroAuth(req.body)
    try {
        await newCafe.save()
        const msg = { message: 'successfully added' }
        res.status(200).json(msg)
    } catch(err) {
        res.status(500).json(err)
    }
}

exports.login = async(req,res) => {
    try {
        const cafe = await CafeRestroAuth.findOne({$or:[ { mobileNo: req.body.userName },{ email: req.body.userName } ]})
        if(!cafe) {
            res.status(404).json({message: 'cafe/restro is not found'})
        }
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            cafe.password
        )
        const token = jwt.sign({id: cafe._id}, process.env.JWT_SEC)
        if(!passwordIsValid) {
            res.status(401).json({message: 'password entered is incorrect'})
        } else {
            const data = {
                mobileNo: cafe.mobileNo,
                email: cafe.email,
                token: token
            }
            res.status(200).json(data)
        }
    } catch(err) {
        res.status(500).json(err)
    }
}
exports.addDetails = async(req, res) => {
    const newCafe = new CafeRestro({...req.body, authId: req.data._id})
    try {
        await newCafe.save()
        const msg = {message: 'successfully added'}
        const {authId, ...data} = newCafe
        res.status(201).json({data,msg})
    } catch(err) {
        res.status(500).json(err)
    }
}
exports.updateDetails =  async(req,res) => {
    try {
        const cafe = await CafeRestro.updateOne({authId: req.data._id}, req.body)
        res.status(200).json({cafe, message: 'successfully updated'})
    } catch(err) {
        res.status(500).json(err)
    }

}
exports.getcafeRestro = async(req,res) => {
    try {
        const cafe = await CafeRestro.findById(req.params.id)
        if(!cafe) res.status(404).json({message: 'not found'})
        res.json(200).json(cafe)
    } catch(err) {
        res.json(500).json(err)
    }
}
// getCafeRestro, updateDetails
