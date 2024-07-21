const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')


// dotenv config
// dotenv.config()

// mongo connection
connectDB()


// rest object
const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// testing
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));


// port
const PORT = 5137


// listen
app.listen(PORT,()=>{
    console.log(`Node Server running In development Mode On Port 5137`.bgBlue.white)
})
