const express = require('express');
const router = express.Router();

const Conatct = require("../model/contact");

//retriving data
router.get("/contacts",(req,res)=>{
    Conatct.find((err,contacts)=>{
        res.json(contacts);
    })
})

//add contact
router.post('/contact',(req,res,next)=>{
    let newContact = new Conatct({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    });
    newContact.save((err,contact)=>{
        if(err){
            res.json({msg:"Failed to Added"});
        }
        else{
            res.json({msg:"conatct added succesfully"});
        }
    })
})
router.delete('/contact/:id',(req,res,next)=>{
    Conatct.deleteOne({
        _id:req.params.id
    },(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.send(result);
        }
    })
})

module.exports = router;