const express = require('express')
const app=express()
const bodyParser = require('body-parser');


const port=process.env.PORT || 8000;

app.get("/", (req,res)=>{
    return res.json({message: "Hey I am a container in Nodejs"});
})

app.listen(port, ()=>  console.log(`server started on PORT:${port}`));