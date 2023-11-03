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

app.route('/articles')
    .get((req, res) => {
        Article.find()
            .then((foundArticles) => {
                res.send(foundArticles);
            }).catch(err => {
                res.send(err);
            })
    })
    .post((req, res) => {

        const newAritcle = new Article({
            title: req.body.title,
            content: req.body.content
        })

        newAritcle.save().then(() => {
            res.send("Saved sucesfully");
        }).catch((err) => {
            res.send(err);
        });
    })
    .delete((req, res) => {
        Article.deleteOne({ title: "Amsuv" })
            .then(() => {
                res.send("Deleted Sucessfuly")
            }).catch((err) => {
                res.send(err);
            })
    })

///////////////// For specific route ///////////////
app.route('/articles/:articleTitle')
    .get((req, res) => {
        Article.findOne({ title: req.params.articleTitle })
            .then((foundArticles) => {
                res.send(foundArticles);
            }).catch((err) => {
                res.send("No artiles found")
            })
    })
    .put((req, res) => {
        Article.updateOne({ title: req.params.articleTitle },
            { title: req.body.title, content: req.body.content })
            .then(() => {
                res.send("Update sucesefuly")
            }).catch(err => {
                res.send(err)
            })
    })
    .patch((req, res) => {
        Article.updateOne({ title: req.params.articleTitle }, { $set: req.body })
            .then(() => {
                res.send("update sucesfully")
            }).catch(() => {
                res.send("Error happens")
            })
    })
    .delete((req, res) => {
        Article.deleteOne({ title: req.params.articleTitle })
        .then(()=>{
            res.send("Deleted sucessfuly")
        })
    })



app.listen('3000', () => {
    console.log("port is running sucessuly");
})