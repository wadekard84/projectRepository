require("dotenv").config();
const express = require("express");
const app = express();
const cookie_parser=require("cookie-parser")
app.use(cookie_parser());
const body_parser = require("body-parser");
app.use(body_parser.json());

const port = process.env.PORT ||3000;
const conn=require("./db/conn")
conn.getDbConnection();

const govind_structure = require("./route/govind.route")
app.use("/govindPark",govind_structure)
app.listen(port,()=>{
    console.log(`connection is live at port no.${port}`)
})



