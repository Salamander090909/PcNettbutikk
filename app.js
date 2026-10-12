const express = require("express");
const argon2 = require("argon2");
const mongoose = require("mongoose");

const mongodb = mongoose.connect("mongodb://localhost:27017/User");


const app = express();


app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", (req, res) =>{
    res.render("index")
})

app.get("/stationary", (req, res) =>{
    res.render("stationary")
})

app.get("/laptop", (req, res) =>{
    res.render("laptop")
})

app.listen(4000, () =>{
    console.log("http://localhost:4000")
})