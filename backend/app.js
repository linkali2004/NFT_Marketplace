const express = require("express");
const fs = require("fs");
const app = express();
const port=  3000;


app.use(express.json());
const result = JSON.parse(fs.readFileSync("./data/nfts.json"));
app.get("/api/v1/nfts/",(req,res)=>{
    res.status(200).json({
        data:result
    })
})

const nftLengthValidator = (req,res,next)=>
{
    const id = req.params.id;
    if(id > result.length)
    {
        return res.status(404).json({
            data:"Data not found"
        })
    }
    next();
}

app.route("/api/v1/nfts/:id").get(nftLengthValidator,(req,res)=>{
    const id = req.params.id;
    const nft = result.find((el)=>el.id==id);
    res.status(200).json({
        data:nft
    })
}).patch(nftLengthValidator,(req,res)=>{
    res.status(200).json({
        data:"This is the patch function"
    });
}).delete(nftLengthValidator,(req,res)=>{
    res.status(200).json({
        data:"This the delete function"
    })
})


app.listen(port,()=>{
    console.log("App running on port 3000");
})