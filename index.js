const express = require('express');
const cors =require('cors');
const dotenv=require('dotenv');
const db=require('./config/database.js');

dotenv.config();

const app=express();
app.use(cors());


//static files middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.json({message:"deneme deneme"});
});

const port = process.env.PORT;

db();


app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
  });