const express=require("express");
const app=express();
app.use(express.json());
app.listen(5001,()=>{
    console.log("服务器启动了");
});
app.get("/connect",(req,res)=>{
    console.log("Hi");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.sendStatus(200);
});
app.post("/connect",(req,res)=>{
    console.log("Hi");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.sendStatus(200);
});
app.post("/addnewcell",(req,res)=>{
    console.log(req);
    res.setHeader("Access-Control-Allow-Origin","*");
    res.sendStatus(201);
});
app.get("/cellstatus",(req,res)=>{
    console.log("hey");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.json({
        "isAlive":true,
    })
});