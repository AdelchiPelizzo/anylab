const express = require('express');
const bodyParser= require('body-parser');
const app = express();
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3008, function() {
    console.log('listening on 3008')
});
app.get('/:page/:label', (req, res) => {
    console.log(req.params.page);
    console.log(req.params.label);
    let r = {};
    r.page = req.params.page;
    r.label = req.params.label;
    res.json(r);
});
app.get('/labels', (req, res) => {
    console.log(req.label)
    // res.sendFile(__dirname + '/index.html')
});
app.post('/quotes', (req, res) => {
    console.log(req.body)
});