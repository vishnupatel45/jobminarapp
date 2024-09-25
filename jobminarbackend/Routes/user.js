const express = require('express')
const { signmodal } = require('../model/usermodel')
const Routes = express.Router()

Routes.route('/').get(async (req, res) => {
    try {
        const user = await signmodal.find()
        res.json(user)
    } catch (error) {
        console.log(error)
    }
}).post(async (req, res) => {
    const userData = {
        userName: req.body.userName,
        userGender: req.body.userGender,
        userAge: req.body.userAge,
        userEmail: req.body.userEmail,
        userPhone: req.body.userPhone
    }
    if (!userData.userName || !userData.userGender || !userData.userAge || !userData.userEmail || !userData.userPhone) {
        return res.status(400).send('Please fill in all the fields.');
    }
    try {
        const user = await signmodal.create(userData)
        console.log('user Login successfull')
        res.status(200).send('userLogin successfully')
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})


module.exports = {
    Routes
}