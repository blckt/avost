var express = require('express');
var router = express.Router();
var rq=require('../workers/avostRequest')({});
var fs=require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/pars',function(req,res){

console.log();

    res.send(rq.body);

});
module.exports = router;
