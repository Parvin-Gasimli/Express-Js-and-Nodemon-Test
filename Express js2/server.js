const express=require("express")
const dotenv=require("dotenv")


dotenv.config({
    path:"./config/env/config.env"
})

//localhost/api/auth
//localhost/api/questions

const app =express();
const PORT=process.env.PORT

app.get("/api/questions",(req,res)=>{
    res.send("quetions Homepage")
})
app.get("/api/questions/delete",(req,res)=>{
    res.send("quetions Delete")
})
app.get("/api/aout",(req,res)=>{
    res.send("AUTHOR")
})
app.get("/api/aout/regiser",(req,res)=>{
    res.send("REGISTER ")
})
app.get("/api/aouTh.dele",(req,res)=>{
    res.send("AUTOR DDLETED")
})

app.listen(PORT,()=>{
    console.log("APP is Runing PORT Updated "+PORT + ":"+ process.env.NODE_ENV);
})

