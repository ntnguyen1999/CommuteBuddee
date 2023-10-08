import express from 'express'

import cors from 'cors'
import "dotenv/config"

import * as dbo from "./db/conn.mjs"
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));
// get driver connection

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
});