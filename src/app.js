import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import ContactRouter from './routes/api/contacts.js';

dotenv.config()

const {DB_HOST, PORT = 5000} = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/contacts/', ContactRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Not found" })
})

app.use((error, req, res, next)=> {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({message})
})

mongoose.connect(DB_HOST)
    .then(()=> {
        console.log("DataBase connected...")
        app.listen(PORT);
        console.log(`Server running on port ${PORT}`)
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    })
