var express = require('express');
var router = express.Router();
const submitsingleuser = require('../model/submitsingleuser');
const getallusers = require('../model/getallusers');
const singleMoney = require('../model/singleMoney');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'helloworld' });
});
router.get('/test', (req, res, next) => {
    res.send({ msg: 'test' });
});

router.post('/submitsingleuser', submitsingleuser);

router.get('/getallusers', getallusers);

router.get('/singlemoney', submitsingleuser)
module.exports = router;