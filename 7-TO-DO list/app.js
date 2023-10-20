const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todo-list');

const itemModel = require('./itemModel');
const Item = itemModel.Item; // The Mongoose model
const List = require('./listmodel');//Importing list model

const app = express();

//body-praser and express init
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//ejs init
app.set('view engine', 'ejs');



//intialization of items in to database
const item1 = new Item({ name: 'Silence' });
const item2 = new Item({ name: 'Dance' });
const item3 = new Item({ name: 'Fuck' });

const defaultItem = [item1, item2, item3];



//get request to home router...
app.get('/', (req, res) => {

    Item.find()
        .exec().then(foundItems => {
            if (foundItems.length === 0) {
                Item.insertMany(defaultItem)
                    .then(result => {
                        console.log(" Inserted document", result);
                    }).catch(err => {
                        console.error("error", err);
                    });

                res.redirect('/');
            } else {
                res.render('list', { currentday: "Today", newtask: foundItems, actionValue: "/" });
            }

        }).catch(err => {
            console.error('Error finding items:', err);
        });

});

//post request to home router
app.post('/', (req, res) => {

    let itemName = req.body.task;
    let listName = req.body.list;

    const item = new Item({ name: itemName });

    if (listName === "Today") {
        item.save();
        res.redirect('/');
    } else {
        List.findOne({ name: listName })
            .then(foundList => {
                foundList.items.push(item);
                foundList.save();
                res.redirect('/' + listName)
            })
    }


})






//post request to delete task to /delete router
app.post('/delete', (req, res) => {

    let checkedItem = req.body.checkbox;
    async function removeDocument() {
        try {
            await Item.deleteOne({ _id: checkedItem });
            console.log('Document removed successfully');
            res.redirect('/');
        } catch (err) {
            console.error('Error:', err);
            res.redirect('/');
        }
    }

    removeDocument();

})







//get request to work router
app.get('/:customListName', (req, res) => {
    const customListName = req.params.customListName;

    List.findOne({ name: customListName })
        .populate('items') // Populate the 'items' field
        .exec()
        .then(document => {
            if (!document) {
                // No document found, so create a new one
                const list = new List({
                    name: customListName,
                    items: defaultItem
                });

                list.save();
                res.redirect(`/${customListName}`);
            } else {
                // Document found, show an existing list with populated items
                res.render('list', { currentday: document.name, newtask: document.items, actionValue: `/${customListName}` });
            }
        })
        .catch(err => {
            console.error('Error:', err);
        });

})


























app.get('/about', (req, res) => {
    res.render('about');

});



app.listen(3000, () =>
    console.log("port is running in 3000 port")
)