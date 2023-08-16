const express=require('express');
const port=9000;
const app=express();

app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(port,(err)=>{
    if(err){
        console.log("error while staring server");
    }
    console.log("server start on port :"+port);
})