var express=require('express');
var router=express.Router();

//get homepage
router.get('/register',function (req,res) {
 res.render('register');
});

router.get('/login',function (req,res) {
 res.render('login');
});
module.exports=router;