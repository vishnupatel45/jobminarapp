const express = require('express')
const cors = require('cors')
const { signmodal } = require('./model/usermodel')
const { HandileLogin } = require('./connection/user')
const {Routes} = require('./Routes/user')

const app = express()
const PORT = 6001

HandileLogin('mongodb://localhost:27017')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/user',Routes)
app.post('/userNumber', async (req, res) => {
    try {
        const userPhone = parseInt(req.body.userPhone)
        const user = await signmodal.findOne({ userPhone })
        console.log(typeof(userPhone))
        console.log(userPhone)
        if (!user) {
            console.log('User Not Found')
            return res.status(404).json({ message: 'User Not Found' })
        }
        const otp = generateOTP();
        // otpStore[mobileNumber] = otp; 
        console.log(`OTP for ${userPhone}: ${otp}`); 

        res.send({ message: 'OTP sent successfully', otp });
    } catch (error) {
        console.log(error)
    }

})



//otp generater
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

app.listen(PORT, () => { console.log('PORT is running on', PORT) })



