const express=require("express")


const router=express.Router()
router.get("/",(req,res)=>{
    res.send("Questions saaam ")
})

router.get("/delete",(req,res)=>{
    res.send("QUESTIONS PAGE saaaMMEKM delete")
})

module.exports=router