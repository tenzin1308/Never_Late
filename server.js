import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from 'cors'
// Accessing the path module
import path from "path"
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
app.use('/', function (req, res) {
    res.send('Hello World');
})
// 
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

// 
const port = process.env.PORT || 5000

// Heroku
// // Step 1:
// app.use(express.static(path.resolve(__dirname, "./client/build")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "./client/build")));
    const path = require("path")
    app.get("*", function (request, response) {
        response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
    })
}


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})

