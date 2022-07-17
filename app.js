import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const {DB_HOST, PORT = 5000} = process.env;

const app = express();

app.use(cors());
app.use(express.json())


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
