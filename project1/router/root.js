const { log } = require("console")
const express=require("express")
const path=require("path")
const router=express.Router()

router.get('^/$|index(.html)?',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"..","view","index.html"))
   }) 
router.post('/form-submit',(req,res)=>{
   const data=req.body
    res.status(200).sendFile(path.join(__dirname,"..","view","form-submit.html"))
console.log(data.title);
   }) 
   
   router.get("*",(req,res)=>{
   res.status(400).sendFile(path.join(__dirname,"..","view","404.html"))
   })
   
   module.exports=router