//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/UserDB');

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

const User = new mongoose.model('User', userSchema)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    const user1 = new User({
        email: req.body.username,
        password: req.body.password,
    })

    user1.save().then(() => {
        res.render('secrets')
    }).catch((err) => {
        console.log(err);
    })
})

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ email: username }).then((foundUser) => {
        if (foundUser) {
            // If a user with the given email is found, check their password
            if (foundUser.password === password) {
                res.render('secrets');
            } else {
                // Password doesn't match
                res.send('Incorrect password');
            }
        } else {
            // No user with the given email found
            res.send('User not found');
        }
    }).catch((err) => {
        console.log(err);
    })
})

app.listen('3000', () => {
    console.log("server is runing on port 3000");
})