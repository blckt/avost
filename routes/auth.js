var express = require('express');
var router = express.Router();
var User=require('../database/schemas/user');
var jwt=require('jsonwebtoken');
var secret=require('../config').secret;
router.post('/registr',function (req,res) {
    var user= new User();
    user.username=req.body.username;
    user.name=req.body.name;
    user.password=req.body.password;
    user.admin=false;
    user.created_at=new Date();
    user.email=req.body.email;
    user.save(function(err,user){
  
    if(err){
        if (err.code==11000) {
            return res.json({
                success:false,
                message:"Username already exist"
            });
        } else {
            res.send(err);
        }
    }else{
    res.json({
        success:true,
        message:"User created!"
    });
    }
    });   
    
});
router.post('/auth',function(req,res){
    
   console.log(req.path);
  User.findOne({username:req.body.username}).select('username password admin email').exec(function(err,user){
     var check=false;
      if (err) {check=true;
           throw err;
           
       }
       if (!user) {check=true;
           res.json({
                 success:false,
                message:"User not found"
           })
       }
       if(!user.comparePasswords(req.body.password,user.password)){
         check=true;
            res.json({
                     success:false,
                message:"Passwords doesn`t match"
            });
        }
        if (check==false) {
             var token=jwt.sign({
            name:user.username,
            password:user.password,
            admin:user.admin,
            email:user.email
        },secret,{
             expiresIn: 1440*60*60
        })
        res.json({
            success:true,
            token:token
        });
        }
       
      
  });
    
});
function authenticate(username,pass) {
    User.findOne({username:username},function(err,user){
        if(err){ return {
            success:false,
            "error":err
        }
        }
        if(!user) {
            return {
                success:false,
                message:"User not found"
            }
        }
        if(!user.comparePasswords(pass,user.password)){
            return {
                success:false,
                message:"Passwords doesn`t match"
            }
        }
        return jwt.sign({
            name:user.name
        })
        
    });
}

module.exports = router;
