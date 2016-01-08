var express = require('express');
var router = express.Router();
var rq=require('../workers/avostRequest')({});
var fs=require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/pars',function(req,res){

    var lala=require('../workers/fs')({},req,res.write);
 
 res.end()
});
module.exports = router;
