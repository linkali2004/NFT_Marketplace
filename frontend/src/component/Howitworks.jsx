import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Heading from './Heading'

export default function Howitworks() {
    const imgNames=["Icon.png","Icon (1).png","Icon (2).png"];
    const names=["Setup your wallet","Create Collection","Start Earning"];
    const subnames=['Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.' ,"Upload your work and setup your collection. Add a description, social links and floor price.","Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."];
  return (
    <Box sx={{ display: "flex", gap: { xs: "40px" }, flexDirection: "column" ,padding:"20px 30px"}}>
    <Heading title="How it works" subtitle="Find out How to get started"></Heading>
    <Grid container  rowSpacing={{xs:1,sm:2}}>
      {imgNames.map((data,index)=>{
        return(
          <Grid key={index} item xs={12} md={4} sm={6} lg={4} sx={{display:"flex",justifyContent:"center",cursor:"pointer"}}>
          <Box sx={{width:"300px",height:"380px",backgroundColor:"#3B3B3B",borderRadius:"12px",display:"flex",flexDirection:'column',alignItems:"center",justifyContent:"center"}}>
            <img src={"/"+data}></img>
            <Typography variant="body1" sx={{fontWeight:"600"}}>{names.at(index)}</Typography>
            <Typography variant="body1" sx={{fontSize:"12px",textAlign:"center",padding:"0px 8px"}}>{subnames.at(index)}</Typography>
          </Box>
      </Grid>

        )
      })}
    </Grid>
    </Box>
  )
}
