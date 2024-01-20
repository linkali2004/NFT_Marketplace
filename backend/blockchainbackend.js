const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

app.get("/tokenPrice",async (req,res)=>{
    const  {query} = req;
    console.log(query)
    const responseOne = await Moralis.EvmApi.token.getTokenPrice({
        address:query.addressOne
    })
    const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
        address:query.addressTwo
    })
    let temp = {rateOne:responseOne.raw.usdPrice,rateTwo:responseTwo.raw.usdPrice,ratio:responseOne.raw.usdPrice/responseTwo.raw.usdPrice};
    res.json(temp);
})


Moralis.start({
    apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjYzYWJiNDMwLWM3ZTEtNDQxOC04MjE1LWM1YWY0MDE4YWU2NyIsIm9yZ0lkIjoiMzczMDM3IiwidXNlcklkIjoiMzgzMzY3IiwidHlwZUlkIjoiNjRkOWVhNzItYWRkMS00NGEwLTlhMGQtMjU1OGMwOTg3ZWY2IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDU1OTAwNzUsImV4cCI6NDg2MTM1MDA3NX0.KTNKwKOzqu5MeRTJuQxQypOxh-fJE8vmwd6IkOl68vI"
}).then(()=>{
    app.listen(3000,()=>{
        console.log("listening on port 3000");
    })
})