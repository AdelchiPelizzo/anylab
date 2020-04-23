const express = require('express');
const bodyParser= require('body-parser');
const app = express();
// const https = require('https');
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('port', process.env.PORT || 3008);
// app.listen(port, function() {
//     console.log('listening on 3008')
// });
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
// https.createServer(app).listen(process.env.port || 3008, function() {
//     console.log('Express app started');
// });