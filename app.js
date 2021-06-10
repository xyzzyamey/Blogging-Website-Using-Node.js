const express=require("express");
const app=express();
const bcrypt = require('bcrypt');
const http=require('http');
const path=require('path');
const request=require('request');
app.use(express.urlencoded());
app.use(express.json());
const port=3000;
const fs=require('fs');
app.set('view engine', 'ejs');
app.use(express.static('public'));
const db=require('./db.js')


const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>{
        app.listen(port, ()=>{
            console.log(`Application started on port: ${port}`);
        });
    })
    .catch((err)=>{
        console.log(err);
    })



//home page
app.get('/',(req,res)=>{
    res.redirect('/home');
})

app.get('/home:id',(req,res)=>{
    res.render('home.ejs');
})



// login
app.get('/login', (req,res)=>{
    res.render('login.ejs');
})

app.post('/login' ,async (req, res)=>{
    username = req.body.name;
    password = req.body.password;

    try{
        //find user with his password using bcrypt.compare from db
    }
    catch{

    }
})




//signup
app.get('/signup', (req,res)=>{
    res.render('signup.ejs');
})

app.post('/signup',async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = {username: req.body.name, password: hashedPassword, user};
        //insert into db
    }
    catch{
        res.status(500).send();
        console.log('error');
    }
    

})



//myblogs
app.get('/myblogs:id', (req,res)=>{
    res.render('myblogs.ejs');
})


//allblogs
app.get('/allblogs:id', (req,res)=>{
    res.render('allblogs.ejs')
})


//addblog
app.get('/addblog:id', (req,res)=>{
    res.render('addblog.ejs');
})


//error 404 template
app.use((req,res)=>{
    res.status(400).render('404.ejs');
})
