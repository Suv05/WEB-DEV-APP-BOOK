const express = require('express');
const bodyParser = require('body-parser');
const mydate = require(__dirname + "/date.js");

const app = express(); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.set('view engine', 'ejs');


//1st declaration of item
let items = ["Eat", "Drink", 'Play'];
let workItems = [];


//get request to home router...
app.get('/', (req, res) => {

    let day = mydate();

    res.render('index', { currentday: day, newtask: items, actionValue: "/" });

});

//post request to home router
app.post('/', (req, res) => {

    let item = req.body.task;
    items.push(item);

    res.redirect('/')
})


//post request to work router

app.post('/work', (req, res) => {
    let workitem = req.body.task;
    workItems.push(workitem);


    res.redirect('/work');
});



//get request to work router
app.get('/work', (req, res) => {
    res.render('index', { currentday: "Work List", newtask: workItems, actionValue: "/work" })

});


app.get('/about', (req, res) => {
    res.render('about');

});







app.listen(3000, () =>
    console.log("port is running in 3000 port")
)