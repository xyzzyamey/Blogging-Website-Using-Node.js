const express=require("express");
const app=express();
const http=require('http');
const path=require('path');
const request=require('request');
app.use(express.urlencoded());
app.use(express.json());
const port=80;
const fs=require('fs');
app.set('view engine', 'ejs');
app.use(express.static('public'));

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

app.get('/home',(req,res)=>{
    res.render('home.ejs');
})



// login
app.get('/login', (req,res)=>{
    res.render('login.ejs');
})




//signup
app.get('/signup', (req,res)=>{
    res.render('signup.ejs');
})



//myblogs
app.get('/myblogs:id', (req,res)=>{
    res.render('myblogs.ejs');
})


//allblogs
app.get('/allblogs:id', (req,res)=>{
    res.render('allblogs.ejs')
})




//error 404 template
app.use((req,res)=>{
    res.status(400).render('404.ejs');
})
