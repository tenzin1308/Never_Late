import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from 'cors'
import bodyParser from 'body-parser'
import fs from 'fs'
// Accessing the path module
import path from "path"
//
import neverLateRouter from './routers/neverLateRouter.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//
// Set EJS as templating engine 
app.set("view engine", "ejs");


// MongoDB connection
mongoose.connect(
    process.env.NeverLate_DB_URI || 'mongodb://localhost/neverlate',
    {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
)

//
app.use('/profile', neverLateRouter)

// 
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

// 
const port = process.env.PORT || 8000


if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "./client/build")));
    app.get("/*", function (request, response) {
        response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
    })
}


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})
