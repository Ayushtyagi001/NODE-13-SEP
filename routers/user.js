const express=require('express');
const userController=require('../controllers/userscontroller');
const router=express.Router();

router.get('/users',(req,res)=>{
    userController.getAllUsers(req,res);
})
router.get('/users/:id',(req,res)=>{
     userController.getUser(req,res)

})
module.exports=router;