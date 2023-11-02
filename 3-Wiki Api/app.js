const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const mongoose = require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/WikiDB');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

//const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


const articleSchema = new mongoose.Schema({
    title: String,
    content: String
})

const Article = mongoose.model('Article', articleSchema);

app.get('/articles', (req, res) => {
    Article.find()
        .then(foundArticles => {
            res.send(foundArticles);
        }).catch(err => {
            res.send(err);
        })
})

app.post('/articles', (req, res) => {

    const newAritcle = new Article({
        title: req.body.title,
        content: req.body.content
    })

    newAritcle.save().then(()=>{
        res.send("Saved sucesfully");
    }).catch((err)=>{
        res.send(err);
    })
})



app.listen('3000', () => {
    console.log("port is running sucessuly");
})