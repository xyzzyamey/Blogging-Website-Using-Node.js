const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const blogs= new Schema({
    username:{
        type: String,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true

    },
    body:{
        type: String,
        required: true
    },


},{timestamps: true});


const users= new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
},{timestamps: true})


const Blog=mongoose.model('Blog', blogs);
const User=mongoose.model('User', users);

module.exports={
    Blog: Blog,
    User: User
}
