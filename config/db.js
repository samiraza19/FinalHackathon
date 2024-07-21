const mongoose = require('mongoose')
const colors = require('colors'

)
const connectDB = async ()=>{
    try {
       await mongoose.connect('mongodb+srv://samiraza19:sami191139@cluster0.8blsshz.mongodb.net/redproud')
       console.log(`Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta.white) 
    } catch (error) {
        console.log(`MongoDB Database Error.. ${error}` .bgRed.white)
    }
}

module.exports = connectDB