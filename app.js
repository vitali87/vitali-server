const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const usersRoutes = require('./api/routes/users');
const codesRoutes = require('./api/routes/codes');

/*expeimental*/
const userSchema = require('./api/models/user');
const codeSchema = require('./api/models/code');
const docUser = new userSchema({
    email:'eheva87@gmail.com',
    name:'Vitali Avagyan',
    age:33,
    country:'UK'
});

const docCode = new codeSchema({
    language:'Python',
    body:'import pandas as pd',
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

/*Those are needed because of deprecation*/
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://127.0.0.1:27017/vitali-server',(err)=>{
    if (err) throw err;
    console.log('Successfully connected to .');
});
const db = mongoose.connection;
const aaa = db.collections;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");

    if (req.method ==="OPTIONS"){
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        return res.status(200).json({});
    }
    return next();
})

app.use('/users',usersRoutes);
app.use('/codes',codesRoutes);

/*expeimental*/
app.use('/user',(req,res,next) => {
     res.json({
        dbName: db.db.databaseName,
        dbSome:  db.host,
        dbSome2: docUser,
        dbCode: docCode,
        dhsjdh: typeof(aaa)
    });
 });

 app.use((error,req,res,next) => {
 res.status(error.status || 500);
 res.json({
     error
 });
});
module.exports = app;