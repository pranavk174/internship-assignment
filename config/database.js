const mongoose = require("mongoose")

exports.connect = async () => {
    try {
        const done = await mongoose.connect(process.env.DB_URL)
        
        if (done) {
            console.log("connection successfull")
        }
    } catch (err) {
        console.log("connection failed due to this reason -> ", err.message)
    }
}    