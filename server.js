import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from 'cors'
//
import neverLateRouter from './routers/neverLateRouter.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// MongoDB connection
mongoose.connect(
    process.env.NeverLate_DB_URI || 'mongodb://localhost/neverlate',
    {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true
    }
)

//
app.use('/profile', neverLateRouter)

// 
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

// Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path")
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
// 
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started at http://localhost:${port}`);
})

