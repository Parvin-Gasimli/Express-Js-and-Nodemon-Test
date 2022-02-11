const express = require("express");
// const {AcessControl,defaultMilddware}=require('./middleware')


const users = [
    { id: 1, name: "Parvin ", Pleace: "Naxcivan" },
    { id: 2, name: "Ali ", Pleace: "Baki" },
    { id: 3, name: "Niyazen ", Pleace: "Baki" },
    { id: 4, name: "Matin ", Pleace: "Baki" },
    { id: 5, name: "Ibo ", Pleace: "Baki" },
    { id: 6, name: "Fayrezzzzz ", Pleace: "Baki" }
]
const app = express();
const PORT = 5000;


app.use(express.json())

//Get Request
app.get("/users", (req, res, next) => {
    res.json({
        success: true,
        data: users
    });

})

app.post("/users", (req, res, next) => {
    const user = req.body
    users.push(user);

    res.json({
        success: true,
        data: users
    })
}),

    app.put("/users/:id", (req, res, next) => {
        const id=parseInt(req.params.id)
        for(let i=0;i<users.length;i++){
            if(users[i].id===id){
                users[i]={
                    ...users[i],
                    ...req.body
                }
            }
        }
        res.status(200).json({
            success: true,
            data: users
        })
    }),

    app.delete("/users/:id", (req, res, next) => {
        const id=parseInt(req.params.id)
        for(let i=0;i<users.length;i++){
            if(users[i].id===id){
               users.splice(i,1)
            }
        }
        res.status(200).json({
            success: true,
            data: users
        })
    }),


app.listen(PORT, () => {
    console.log("server runing PORT:" + PORT);
})