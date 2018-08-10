const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {Users} = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todo', (req, res) => {
    // console.log(req.body);
    const todo = new Todo({
        text: req.body.text
    });

    todo.save().then((docs) => {
        res.send(docs);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todo', (req, res) => {
    Todo.find().then((todo) => {
        res.send({todo});
    }, (e) => {
        res.status(400).send(e);
    })
})

app.listen(3000, () => {
    console.log('Start port 3000');
});

module.exports = {app};