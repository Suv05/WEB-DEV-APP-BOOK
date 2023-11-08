//level-1
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

////////////////////////Scecurtiy levels incresing/////////////////////

//level-5
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');


//level-4
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

//level-3
//const md5 = require('md5');

//level-2
//const encrypt = require('mongoose-encryption');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//intialize express session (level 5)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());



mongoose.connect('mongodb://127.0.0.1:27017/UserDB');

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

userSchema.plugin(passportLocalMongoose);

// part of level-2 security system
//userSchema.plugin(encrypt, { secret: process.env.SECRETE, encryptedFields: ['password'] });

const User = new mongoose.model('User', userSchema)

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/secrets', (req, res) => {
    if (req.isAuthenticated()) {
        res.render("secrets");
    } else {
        res.redirect('/login');
    }
})

app.post('/register', (req, res) => {

    // bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    //     // Store hash in your password DB.
    //     const user1 = new User({
    //         email: req.body.username,
    //         password: hash,
    //     })

    //     user1.save().then(() => {
    //         res.render('secrets')
    //     }).catch((err) => {
    //         console.log(err);
    //     })

    // });


    User.register({ username: req.body.username }, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.redirect('/register');
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/secrets');
            })
        }
    })

})


app.get('/logout', (req, res) => {
    req.logOut(err => {
        console.log(err);
    });
    res.redirect('/');
})

app.post('/login', (req, res) => {

    // const username = req.body.username;
    // const password = req.body.password;
    // User.findOne({ email: username }).then((foundUser) => {
    //     if (foundUser) {
    //         // If a user with the given email is found, check their password

    //         bcrypt.compare(password, foundUser.password, function (err, result) {
    //             // result == true
    //             if (result === true) {
    //                 res.render('secrets');
    //             } else {
    //                 // Password doesn't match
    //                 res.send('Incorrect password');
    //             }

    //         });

    //     } else {
    //         // No user with the given email found
    //         res.send('User not found');
    //     }
    // }).catch((err) => {
    //     console.log(err);
    // })

    const user1 = new User({
        username: req.body.username,
        password: req.body.password
    })

    req.logIn(user1, (err) => {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/secrets');
            })
        }
    })

})

app.listen('3000', () => {
    console.log("server is runing on port 3000");
})