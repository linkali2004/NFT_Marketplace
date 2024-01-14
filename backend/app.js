const express = require("express");
const fs = require("fs");
const app = express();
const port=  3000;
const mongoose = require("mongoose");

app.use(express.json());
const result = JSON.parse(fs.readFileSync("./data/nfts.json"));

let connection = false;
let nft=null;
const nftLengthValidator = (req,res,next)=>
{
    if(connection)
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
    else
    {
        res.send("Please wait while the connection is made");
    }
}

app.route("/api/v1/nfts/:id").get(nftLengthValidator, async (req,res)=>{
    const idtosearch = Number(req.params.id);
    const result = await nft.findOne({id:idtosearch});
    console.log(result);
    res.status(200).json({
        data:result
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

app.route("/api/v1/nfts").get( async (req,res)=>{
    const result = await nft.find(req.query).select({name:1,duration:1}).sort({duration:-1});

    res.status(200).json({
        data:result
    })
})

const nftSchema = new mongoose.Schema({
    id:{type:Number,required:true,min:0},
    name:{type:String,required:true},
    duration:{type:Number},
    maxGroupSize:Number,
    difficulty:String,
    ratingsAverage:{type:Number,default:3.1},
    ratingsQuantity:Number,
    price:Number,
    summary:String,
    description:String,
    imageCover:String,
    images:[String],
    startDates:[String]
})

app.listen(port,async ()=>{
    connection= await mongoose.connect("mongodb+srv://shrey2004:shrey@cluster0.9j4ff.mongodb.net/nfts?retryWrites=true&w=majority");
    nft=mongoose.model("Nfts",nftSchema);
    console.log("App running on port 3000");
})