const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const multer = require('multer');
const fs = require('fs').promises; 
const fsanother = require("fs")  // Use promises from fs module
const path = require('path');
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const pinataSDK = require('@pinata/sdk');
const pinata = new pinataSDK({pinataApiKey: process.env.API_Key, pinataSecretApiKey: process.env.API_Secret });




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the destination folder
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original file name
    },
});
const upload = multer({ storage: storage });

app.get("/tokenPrice", async (req, res) => {
    const { query } = req;
    console.log(query)
    const responseOne = await Moralis.EvmApi.token.getTokenPrice({
        address: query.addressOne
    })
    const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
        address: query.addressTwo
    })
    let temp = { rateOne: responseOne.raw.usdPrice, rateTwo: responseTwo.raw.usdPrice, ratio: responseOne.raw.usdPrice / responseTwo.raw.usdPrice };
    res.json(temp);
})

app.post("/createnft",upload.single("file"), async (req, res) => {
    const tokenPass = req.body.jwttoken;
    let temp = tokenPass.split(" ")[1];
    if(verifyUser(temp))
    {
        const filePath = req.file.path;
        const files = (await fs.readdir("./uploads"))[0];
        const filepath = path.join("./uploads", files);
        const fileStream = fsanother.createReadStream(filepath);
        
        // uploading file to IPFS
        const options = {
          pinataMetadata: {
            name: files,
            keyvalues: {
              title: req.body.title,
              description: req.body.description,
            },
          },
          pinataOptions: {
            cidVersion: 0,
          },
        };
        try {
         const response = await pinata.pinFileToIPFS(fileStream, options);
          console.log(response);
          await fs.unlink(filepath);
          res.statusMessage="OK";
          res.statusCode = 200;
          res.send({data:'File uploaded successfully!',error:null,ipfsHash:response.IpfsHash})
        } catch (error) {
          console.error('Error uploading to IPFS:', error);
        }
    }
    else
    {
        console.log("error");
        res.status(400).send({data:null,error:"You are not authorized to create nft. Please login/ signup before doing so...."});
    }
    })

Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjYzYWJiNDMwLWM3ZTEtNDQxOC04MjE1LWM1YWY0MDE4YWU2NyIsIm9yZ0lkIjoiMzczMDM3IiwidXNlcklkIjoiMzgzMzY3IiwidHlwZUlkIjoiNjRkOWVhNzItYWRkMS00NGEwLTlhMGQtMjU1OGMwOTg3ZWY2IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDU1OTAwNzUsImV4cCI6NDg2MTM1MDA3NX0.KTNKwKOzqu5MeRTJuQxQypOxh-fJE8vmwd6IkOl68vI"
}).then(() => {
    app.listen(4000, () => {
        console.log("listening on port 4000");
    })
})


function verifyUser(token)
{
    if(token)
    {
        jwt.verify(token,"hello everyone",(err,decodedToken)=>{
            if(err)
            {
                throw Error(err);
                return false;
            }
            else
            {
                console.log(decodedToken);
                return true;
            }

        })
        return true
    }
    else
    {
        console.log("returning....")
        return false;
    }
}