import express from "express"


const app = express()



app.get("/", (req,res)=>{
    res.status(200).send("selam bebek")
})

app.listen(5500, console.log("5500 portunda çalışıyor."))