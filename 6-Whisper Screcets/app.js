//level-1
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

////////////////////////Scecurtiy levels incresing/////////////////////

//level-5
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//intialize express session (level 5)
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));


app.use(passport.initialize());
app.use(passport.session());



mongoose.connect('mongodb://127.0.0.1:27017/UserDB');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId:String
})

userSchema.plugin(findOrCreate);
userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model('User', userSchema)

passport.use(User.createStrategy());

passport.serializeUser(function (User, done) {
    done(null, User);
});

passport.deserializeUser(function (User, done) {
    done(null, User);
});


////////////////////////////////Google authotincation///////////////////////
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets"
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        User.findOrCreate({ username: profile.displayName, googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));



app.get('/', (req, res) => {
    res.render('home')
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ["profile"] })
);
app.get("/auth/google/secrets",
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect("/secrets");
    });

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
});


app.post('/register', (req, res) => {

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