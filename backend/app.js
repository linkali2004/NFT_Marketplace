const express = require("express");
const fs = require("fs");
const app = express();
const port=  3000;
var bcrypt = require("bcryptjs");
const validator = require("validator");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));



let connection = false;
let nft=null;
let login=null;
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
app.use(cors({ origin: "http://localhost:5173", optionsSuccessStatus: 200 }));
app.route('/api/v1/signup').post(async (req,res)=>{
    var salt = bcrypt.genSaltSync(10);
    if(login)
    {
        var hashedPassword = bcrypt.hashSync(req.body.Password,salt);
        var hashedConfirmedPassword = bcrypt.hashSync(req.body.ConfirmPassword,salt);
        const transformedCredentials = {...req.body};
        transformedCredentials["Password"] = hashedPassword;
        transformedCredentials["ConfirmPassword"]=hashedConfirmedPassword;
        const result = await login.create(transformedCredentials);
        const token = jwt.sign({id:result._id},"hello everyone",{expiresIn: '1d'})
        res.cookie("jwt",token,{httpOnly:true,maxAge:86400000})
        res.status(200).json({
            data:{result,token}
        })
    }else{
        res.status(200).json({
            data:"Please wait while we are connecting to the database"
        })
    }
});

app.route("/api/v1/login").post(async (req,res)=>{
    if(login)
    {
        const document = await login.findOne({Username:req.body.Username});
        const check = bcrypt.compareSync(req.body.Password,document.Password);
        const token = jwt.sign({id:document._id},"hello everyone",{expiresIn: '24h'})
        res.cookie("jwt",token,{httpOnly:true,maxAge:86400000})
        if(document.Password === document.ConfirmPassword)
        {
            res.status(200).json({
                data:{document,token}
            })
        }
    }  
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

const loginSchema = new mongoose.Schema({
    Username:{type:String,minLength:3,required:true,unique:true},
    Email:{type:String,validate:[validator.isEmail,"Email is of incorrect format"],required:true},
    Password:{type:String,required:true,validate:{validator:function(val){return /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(val)},message:"Your password must contain 8 characters along with one uppercase and special character"}},
    ConfirmPassword:{type:String,required:true,validate:{validator:function(val){return /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(val)},message:"Your password must contain 8 characters along with one uppercase and special character"}}
})

nftSchema.pre("find",{document:true,query:false},(next)=>{
    console.log(this);
    next();
})
app.listen(port,async ()=>{
    connection= await mongoose.connect("mongodb+srv://shrey2004:shrey@cluster0.9j4ff.mongodb.net/nfts?retryWrites=true&w=majority");
    nft=mongoose.model("Nfts",nftSchema);
    login=mongoose.model("User",loginSchema);
    console.log("App running on port 3000");
})

