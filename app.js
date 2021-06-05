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



//home page
app.get('/',(req,res)=>{
    res.redirect('/home');
})

app.get('/home',(req,res)=>{
    res.render('home.ejs');
})



//teacher login
app.get('/teacher/login', (req,res)=>{
    res.render('teacherlogin.ejs');
})



//student login
app.get('/student/login', (req,res)=>{
    res.render('studentlogin.ejs');
})



//teacher signup
app.get('/teacher/signup', (req,res)=>{
    res.render('teachersignup.ejs');
})



//student signup
app.get('/student/signup', (req,res)=>{
    res.render('studentsignup.ejs');
})




//error 404 template
app.use((req,res)=>{
    res.render('404.ejs');
})
