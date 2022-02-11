const express=require("express")
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("Aouth Home pagfe")
})

router.get("/register",(req,res)=>{
    res.send("Register PAGE saaaMMEKM")
})

module.exports=router