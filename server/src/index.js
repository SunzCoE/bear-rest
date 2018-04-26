var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');

var bears = [
    { id: '1', name: 'Gerrard' },
    { id: '2', name: 'Salah' }
];

router.route('/bears')
    .get(function(req, res){
        res.send(bears);
    })
    .post(function(req, res) {
        var bear = {};
        bear.name = req.body.name;
        bears.push(bear);
        res.json({ message: 'Bear created!' });
    })
    router.route('/bear/:id')
    .delete(function(req, res){
        bears = bear.filter(b => b.id !== req.param.id)
        res.json({ message: 'Bear delete!'});
    })

app.use(cors());
// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);
app.listen(8000);