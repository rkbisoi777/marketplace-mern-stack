import express from "express";
import { readdirSync } from "fs";
import cors from 'cors';
import mongoose from "mongoose";
const morgan = require("morgan");
require('dotenv').config();

const app = express();

//db connection
mongoose
    .connect(process.env.DATABASE, {
        //userNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
        connectTimeoutMS: 10000,
        poolSize: 10,
        writeConcern: {
        j: true
        }
    })
    .then(() => console.log('DB Connnected'))
    .catch((err) => console.log('DB Connection Error : ', err));

//midllewares
app.use(cors());
app.use(morgan("dev"));

// route middleware
readdirSync("./routes").map((r) =>
    app.use("/api", require(`./routes/${r}`))
);
//app.use('/api', router);


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})