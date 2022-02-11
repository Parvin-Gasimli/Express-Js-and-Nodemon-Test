const express=require("express")
const {GetAllQuestions}=require("../controllers/questions")


const router=express.Router()
router.get("/",GetAllQuestions)



module.exports=router